#!/usr/bin/env bash
#
# server-deploy.sh - runs ON the server (called by GitHub Actions via SSH).
# Usage: ./server-deploy.sh /path/to/repo
#
# One-time server setup:
#   1. git clone git@github.com:mohamadshamekhi/steve_storefront.git <DEPLOY_PATH>
#   2. Place .env.production in <DEPLOY_PATH>
#   3. docker installed on server
#
set -euo pipefail

DEPLOY_PATH="${1:-$(cd "$(dirname "$0")/.." && pwd)}"
CONTAINER_NAME="storefront"
IMAGE_NAME="storefront:latest"

step() { printf '\n\033[1;34m==>\033[0m \033[1m%s\033[0m\n' "$1"; }
ok()   { printf '\033[1;32m✓\033[0m %s\n' "$1"; }
fail() { printf '\033[1;31m✗ %s\033[0m\n' "$1" >&2; exit 1; }

trap 'fail "deploy failed (see above)"' ERR

cd "$DEPLOY_PATH"

[[ -f Dockerfile ]] || fail "Dockerfile not found at $DEPLOY_PATH"
[[ -f .env.production ]] || fail ".env.production missing - place it on the server manually"

# ---------------------------------------------------------------------------
# 1. pull latest code
# ---------------------------------------------------------------------------
step "git pull"
git fetch --prune origin
git reset --hard origin/main
ok "code updated to $(git rev-parse --short HEAD)"

# ---------------------------------------------------------------------------
# 2. build image on server (amd64 = same arch, no cross-compile issues)
# ---------------------------------------------------------------------------
step "docker build"
docker build -t "$IMAGE_NAME" .
ok "image built"

# ---------------------------------------------------------------------------
# 3. restart container
# ---------------------------------------------------------------------------
step "Restart container"
docker stop "$CONTAINER_NAME" 2>/dev/null || true
docker rm   "$CONTAINER_NAME" 2>/dev/null || true
docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p 3000:3000 \
  "$IMAGE_NAME"
ok "container started"

# ---------------------------------------------------------------------------
# 4. smoke test
# ---------------------------------------------------------------------------
step "Smoke test (port 3000)"
for i in $(seq 1 30); do
  curl -fsS -o /dev/null -m 5 http://localhost:3000/ && { ok "app is up"; break; } || true
  [[ $i -eq 30 ]] && {
    echo "app did not answer within 60s:"
    docker logs --tail=80 "$CONTAINER_NAME"
    fail "smoke test failed"
  }
  sleep 2
done

step "Pruning dangling images"
docker image prune -f >/dev/null || true

step "Deploy done: $IMAGE_NAME is live"
