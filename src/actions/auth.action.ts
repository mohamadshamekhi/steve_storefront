'use server';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { SignInModel } from '@/models/auth.model';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signInAction(model: SignInModel) {
    try {
        const response = await fetcher(ApiKeys.LOGIN, 'web', 'POST', {
            body: { ...model }
        });

        if (response) {
            return {
                success: true,
                ...response
            };
        }
    } catch (error: unknown) {
        return {
            success: false,
            error
        };
    }
}

export async function signInVerifyAction(authParams: { code: string; phone_number: string | null }) {
    try {
        const response = await fetcher(ApiKeys.VERIFY_LOGIN, 'web', 'POST', {
            body: { ...authParams }
        });

        if (response) {
            await setAuthCookieAction(response.data.token);
            return {
                success: true,
                ...response
            };
        }
    } catch (error: unknown) {
        return {
            success: false,
            error
        };
    }
}

export async function signOutAction() {
    const cookieStore = await cookies();
    const sessionCookie = await cookieStore.get('steve-session')?.value;

    if (!sessionCookie) {
        redirect('/');
    }

    try {
        await fetcher(ApiKeys.LOGOUT, 'dashboard', 'POST');
        cookieStore.delete('steve-session');
    } catch {
        cookieStore.delete('steve-session');
    }

    redirect('/');
}

export async function setAuthCookieAction(token: string) {
    // const decoded = jwtDecode<JWT>(token);

    // const session: JWT = {
    //     sub: decoded.sub,
    //     exp: decoded.exp * 1000,
    //     entity_id: decoded.entity_id,
    //     kind: decoded.kind,
    //     role_keys: decoded.role_keys,
    //     permission_keys: decoded.permission_keys
    // };

    const cookieStore = await cookies();
    // const encryptedSession = await encryptSession(session);
    const thirtyDays = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    cookieStore.set('steve-session', token, {
        httpOnly: false,
        secure: true,
        sameSite: 'lax',
        path: '/',
        expires: thirtyDays
    });
}

