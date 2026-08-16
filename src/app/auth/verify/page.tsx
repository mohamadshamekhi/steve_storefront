import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import { Suspense } from 'react';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'تایید ورود',
        description: 'تایید کد ورود به حساب کاربری استیو موبایل',
        tags: '',
        canonical: 'https://stevemobile.com/auth/verify',
        og_title: 'تایید ورود | استیو موبایل',
        og_url: 'https://stevemobile.com/auth/verify',
        og_description: 'تایید کد ورود به حساب کاربری استیو موبایل',
        og_sitename: 'استیو موبایل',
        noindex: true,
        nofollow: true
    };
    return pageSeoGenerator(data, 'تایید ورود | استیو');
}

const SignInVerify = () => {
    return (
        <Suspense fallback={<>loading...</>}>
            <ClientPage />
        </Suspense>
    );
};

export default SignInVerify;
