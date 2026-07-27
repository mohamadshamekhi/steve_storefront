import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { JWT } from '@/models/auth.model';
import { jwtDecode } from 'jwt-decode';

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = await cookies();
    const encryptedSession = cookieStore.get('steve-session')?.value as string;

    if (!encryptedSession) {
        return NextResponse.json(
            {
                error: 'Session Not Found!'
            },
            {
                status: 401
            }
        );
    }

    // const session = await decryptSession(encryptedSession);
    const response = await fetcher(ApiKeys.ME, 'dashboard', 'POST');
    const session = jwtDecode<JWT>(encryptedSession);
    const data = {
        session,
        profile: response?.data?.user ?? {}
    };

    return Response.json(data);
}

