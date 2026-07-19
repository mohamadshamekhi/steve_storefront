import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import { Suspense } from 'react';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'ورود',
        description: 'ورود به حساب کاربری استیو شاپ',
        tags: '',
        canonical: 'https://stevemobile.com/auth/sign-in',
        og_title: 'ورود | استیو شاپ',
        og_url: 'https://stevemobile.com/auth/sign-in',
        og_description: 'ورود به حساب کاربری استیو شاپ',
        og_sitename: 'استیو شاپ',
        noindex: true,
        nofollow: true
    };
    return pageSeoGenerator(data, 'ورود | استیو');
}

const SignIn = () => {
    return (
        <Suspense fallback={<>loading...</>}>
            <ClientPage />
        </Suspense>
    );
};

export default SignIn;
