import { JWTPayload, jwtVerify, SignJWT } from 'jose';
const JWT_SECRET = 'lQ4cuOyVR2pP0Mo7jMG0qMW6k8BPDBLRyo9Ux1l0aFA=';
const encodedKey = new TextEncoder().encode(JWT_SECRET);

interface JWT {
    sub: string;
    exp: number;
    entity_id: string;
    kind: string;
    role_keys: string[];
    permission_keys: string | null;
}

export async function encryptSession(session: JWT) {
    return new SignJWT(session as unknown as JWTPayload).setProtectedHeader({ alg: 'HS256' }).sign(encodedKey);
}

export default async function decryptedSession(session: string) {
    const { payload } = await jwtVerify(session, encodedKey, {
        algorithms: ['HS256']
    });
    return payload;
}

