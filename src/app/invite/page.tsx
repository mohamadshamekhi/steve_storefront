import { Metadata } from 'next/types';
import ClientPage from './client-page';

export const metadata: Metadata = {
    title: 'دعوت به استیو موبایل',
    robots: { index: false, follow: false }
};

interface Props {
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

const InvitePage = async ({ searchParams }: Props) => {
    const params = searchParams ? await searchParams : {};
    const raw = params.ref;
    const refCode = Array.isArray(raw) ? raw[0] : raw;

    return <ClientPage refCode={refCode ?? null} />;
};

export default InvitePage;
