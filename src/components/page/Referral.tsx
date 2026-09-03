'use client';

import NumericInput from '@/components/ui/atoms/Input/NumericInput';
import Button from '@/components/ui/atoms/Button/Button';
import EmptyState from '@/components/ui/molecules/EmptyState/EmptyState';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useReferral } from '@/hooks/useReferral';
import { useToast } from '@/hooks/useToast';
import { ReferralItem, ReferralListData, ReferralReward } from '@/models/referral.model';
import { getMyReferrals, getMyRewards, inviteByPhone } from '@/services/referral.service';
import { formatJalali } from '@/utils/date.util';
import { toEnglishDigits } from '@/utils/string.util';
import { useCallback, useEffect, useState } from 'react';

const PAGE_SIZE = 25;

const sourceLabels: Record<ReferralItem['source'], string> = {
    link: 'لینک',
    sms: 'پیامک'
};

const statusStyles: Record<ReferralItem['status'], { label: string; className: string }> = {
    invited: { label: 'دعوت شده', className: 'bg-yellow-100 text-yellow-700' },
    joined: { label: 'ثبت‌نام کرد', className: 'bg-green-100 text-green-700' }
};

/* ---------------------------------- icons ---------------------------------- */

const CopyIcon = ({ className = '' }: { className?: string }) => (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' aria-hidden className={className}>
        <path
            d='M8 8V5.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C9.52 2 10.08 2 11.2 2h7.6c1.12 0 1.68 0 2.108.218.377.192.682.497.874.874C22 3.52 22 4.08 22 5.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 16 19.92 16 18.8 16H16M5.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C16 20.48 16 19.92 16 18.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 8 13.92 8 12.8 8H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 9.52 2 10.08 2 11.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 22 4.08 22 5.2 22Z'
            className='stroke-current'
            strokeWidth='1.75'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

const ShareIcon = ({ className = '' }: { className?: string }) => (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' aria-hidden className={className}>
        <path
            d='M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM11.5 10.5l4 -2.5M11.5 13.5l4 2.5'
            className='stroke-current'
            strokeWidth='1.75'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

const CheckIcon = () => (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' aria-hidden className='shrink-0'>
        <path
            d='m5 13 4 4L19 7'
            className='stroke-green-600'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

/* --------------------------------- helpers -------------------------------- */

function StatPill({ value, label }: { value: number; label: string }) {
    return (
        <div className='rounded-xl bg-white/15 px-3 py-2 text-center'>
            <div className='text-lg font-extrabold'>{value.toLocaleString('fa-IR')}</div>
            <div className='text-caption1-regular text-white/80'>{label}</div>
        </div>
    );
}

/* --------------------------------- screen --------------------------------- */

const Referral = () => {
    const { data: link, loading: linkLoading, error: linkError, refetch: refetchLink } = useReferral();
    const { showToast } = useToast();
    const { copyToClipboard } = useCopyToClipboard();

    const [tab, setTab] = useState<'people' | 'rewards'>('people');

    const [phone, setPhone] = useState('');
    const [inviting, setInviting] = useState(false);
    /** وقتی پیامک نرفت: لینک مخصوص همان شماره را دستی نشان می‌دهیم */
    const [smsFallback, setSmsFallback] = useState<{ phone: string; url: string } | null>(null);

    const [referrals, setReferrals] = useState<ReferralItem[]>([]);
    const [referralMeta, setReferralMeta] = useState<Omit<ReferralListData, 'items'> | null>(null);
    const [referralsLoading, setReferralsLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(1);

    const [rewards, setRewards] = useState<ReferralReward[]>([]);
    const [rewardsLoading, setRewardsLoading] = useState(true);

    const loadReferrals = useCallback(async (pageNumber: number) => {
        if (pageNumber === 1) setReferralsLoading(true);
        else setLoadingMore(true);

        const res = await getMyReferrals(pageNumber, PAGE_SIZE);
        if (res.success && res.data) {
            const { items, ...meta } = res.data;
            setReferralMeta(meta);
            setReferrals((prev) => (pageNumber === 1 ? items : [...prev, ...items]));
            setPage(pageNumber);
        }
        setReferralsLoading(false);
        setLoadingMore(false);
    }, []);

    const loadRewards = useCallback(async () => {
        setRewardsLoading(true);
        const res = await getMyRewards();
        if (res.success && res.data) {
            setRewards(res.data.items);
        }
        setRewardsLoading(false);
    }, []);

    useEffect(() => {
        loadReferrals(1);
        loadRewards();
    }, [loadReferrals, loadRewards]);

    const handleCopy = async (value: string, label: string) => {
        const ok = await copyToClipboard(value);
        showToast({
            title: 'دعوت دوستان',
            message: ok ? `${label} کپی شد` : 'کپی انجام نشد',
            type: ok ? 'success' : 'error'
        });
    };

    const handleShare = async () => {
        if (!link) return;
        const text = `با این لینک توی استیو موبایل ثبت‌نام کن و کد تخفیف بگیر:\n${link.url}`;
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share({ title: 'استیو موبایل', text, url: link.url });
            } catch {
                /* کاربر share را بست */
            }
        } else {
            handleCopy(link.url, 'لینک دعوت');
        }
    };

    const handleInvite = async (e: React.FormEvent) => {
        e.preventDefault();
        const normalized = toEnglishDigits(phone).replace(/\D/g, '');
        if (!/^09\d{9}$/.test(normalized)) {
            showToast({ title: 'دعوت دوستان', message: 'شماره موبایل معتبر نیست', type: 'error' });
            return;
        }

        setInviting(true);
        const res = await inviteByPhone(normalized);
        setInviting(false);

        if (res.success) {
            setPhone('');
            loadReferrals(1);
            refetchLink();

            if (res.data?.sms_sent === false) {
                // پیامک نرفت — لینک را دستی به کاربر می‌دهیم تا خودش بفرستد
                setSmsFallback({ phone: normalized, url: res.data.url || link?.url || '' });
            } else {
                setSmsFallback(null);
                showToast({
                    title: 'دعوت دوستان',
                    message: 'پیامک دعوت برای این شماره ارسال شد',
                    type: 'success'
                });
            }
        } else {
            showToast({ title: 'دعوت دوستان', message: res.message, type: 'error' });
        }
    };

    const threshold = link?.reward_threshold ?? referralMeta?.reward_threshold ?? 5;
    const pending = link?.pending_progress ?? referralMeta?.pending_progress ?? 0;
    const nextIn = link?.next_reward_in ?? referralMeta?.next_reward_in ?? threshold;
    const progressPct = threshold > 0 ? Math.min(100, Math.round((pending / threshold) * 100)) : 0;

    const hasMore =
        referralMeta && referrals.length < referralMeta.pagination.total && referrals.length > 0;

    return (
        <div className='space-y-6'>
            <h1 className='text-gray-850 text-base font-bold sm:text-lg'>دعوت دوستان</h1>

            {/* لینک دعوت */}
            {linkLoading ? (
                <div className='h-56 animate-pulse rounded-2xl bg-gray-100' />
            ) : linkError ? (
                <div className='rounded-2xl border border-red-100 bg-red-50 p-5 text-sm text-red-700'>
                    {linkError}
                    <button onClick={refetchLink} className='mr-2 font-semibold underline'>
                        تلاش مجدد
                    </button>
                </div>
            ) : link ? (
                <div className='from-primary-600 to-primary-500 relative overflow-hidden rounded-2xl bg-linear-to-br p-5 text-white sm:p-6'>
                    <div aria-hidden className='absolute -top-12 -left-12 size-40 rounded-full bg-white/10' />
                    <div aria-hidden className='absolute -right-10 -bottom-16 size-40 rounded-full bg-white/5' />

                    <div className='relative'>
                        <p className='text-sm-plus font-bold sm:text-lg'>دوستانت را دعوت کن، تخفیف بگیر 🎁</p>
                        <p className='mt-1.5 text-sm leading-6 text-white/85'>
                            به‌ازای هر {threshold.toLocaleString('fa-IR')} نفری که با لینک تو ثبت‌نام کنند، یک کد
                            تخفیف ۱۰٪ می‌گیری. هر دوستت هم یک کد ۵٪ خوش‌آمد می‌گیرد.
                        </p>

                        <div className='mt-4 flex flex-col gap-2 sm:flex-row'>
                            <div
                                dir='ltr'
                                className='flex-1 truncate rounded-xl bg-white/15 px-3 py-2.5 text-left text-sm font-medium'
                            >
                                {link.url}
                            </div>
                            <div className='flex gap-2'>
                                <button
                                    onClick={() => handleCopy(link.url, 'لینک دعوت')}
                                    className='flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2.5 text-caption1-medium text-primary-700 transition hover:bg-white/90'
                                >
                                    <CopyIcon />
                                    کپی لینک
                                </button>
                                <button
                                    onClick={handleShare}
                                    className='flex items-center justify-center gap-1.5 rounded-xl bg-white/15 px-3 py-2.5 text-caption1-medium text-white transition hover:bg-white/25'
                                >
                                    <ShareIcon />
                                    اشتراک‌گذاری
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => handleCopy(link.code, 'کد دعوت')}
                            className='mt-3 inline-flex items-center gap-1.5 text-xs text-white/80 transition hover:text-white'
                        >
                            کد دعوت شما: <span dir='ltr' className='font-mono font-bold'>{link.code}</span>
                            <CopyIcon className='size-3.5' />
                        </button>

                        <div className='mt-5 grid grid-cols-3 gap-2'>
                            <StatPill value={link.total_joined} label='ثبت‌نام با لینک تو' />
                            <StatPill value={link.rewards_earned} label='کد تخفیف گرفته‌شده' />
                            <StatPill value={nextIn} label='تا جایزه‌ی بعدی' />
                        </div>

                        <div className='mt-4'>
                            <div className='mb-1.5 flex justify-between text-caption1-regular text-white/85'>
                                <span>
                                    پیشرفت جایزه‌ی بعدی ({pending.toLocaleString('fa-IR')} از{' '}
                                    {threshold.toLocaleString('fa-IR')})
                                </span>
                                <span>{progressPct}%</span>
                            </div>
                            <div className='h-2 overflow-hidden rounded-full bg-white/20'>
                                <div
                                    className='h-full rounded-full bg-white transition-all'
                                    style={{ width: `${progressPct}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {/* دعوت با شماره موبایل */}
            <div className='rounded-2xl border border-gray-100 bg-white p-5 shadow-sm'>
                <h2 className='text-gray-850 mb-1 text-sm font-bold'>دعوت با شماره موبایل</h2>
                <p className='mb-4 text-xs leading-6 text-gray-500'>
                    شماره‌ی دوستت را وارد کن؛ لینک دعوت مستقیم برایش پیامک می‌شود.
                </p>
                <form onSubmit={handleInvite} className='flex flex-col gap-3 sm:flex-row'>
                    <NumericInput
                        name='invite_phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='09xxxxxxxxx'
                        type='tel'
                        maxLength={11}
                        dir='ltr'
                        className='max-w-full! text-left placeholder:text-gray-400'
                    />
                    <Button type='submit' loading={inviting} className='shrink-0 sm:w-auto'>
                        ارسال دعوت
                    </Button>
                </form>

                {smsFallback && (
                    <div className='mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-4'>
                        <p className='text-sm font-semibold text-yellow-800'>پیامک ارسال نشد</p>
                        <p className='mt-1 text-xs leading-6 text-yellow-700'>
                            دعوت برای{' '}
                            <span dir='ltr' className='font-semibold'>
                                {smsFallback.phone}
                            </span>{' '}
                            ثبت شد، اما ارسال پیامک ممکن نشد. این لینک را خودت برای دوستت بفرست:
                        </p>
                        <div className='mt-3 flex flex-col gap-2 sm:flex-row'>
                            <div
                                dir='ltr'
                                className='flex-1 truncate rounded-lg border border-yellow-200 bg-white px-3 py-2 text-left text-xs'
                            >
                                {smsFallback.url}
                            </div>
                            <button
                                type='button'
                                onClick={() => handleCopy(smsFallback.url, 'لینک دعوت')}
                                className='inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-yellow-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-yellow-700'
                            >
                                <CopyIcon className='size-3.5' />
                                کپی لینک
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* تب‌ها */}
            <div>
                <div className='mb-4 flex gap-2 border-b border-gray-100'>
                    <button
                        onClick={() => setTab('people')}
                        className={`-mb-px border-b-2 px-3 py-2 text-sm font-semibold transition ${
                            tab === 'people'
                                ? 'border-primary-600 text-primary-700'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        دعوت‌شده‌ها
                        {referralMeta ? ` (${referralMeta.pagination.total.toLocaleString('fa-IR')})` : ''}
                    </button>
                    <button
                        onClick={() => setTab('rewards')}
                        className={`-mb-px border-b-2 px-3 py-2 text-sm font-semibold transition ${
                            tab === 'rewards'
                                ? 'border-primary-600 text-primary-700'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        کدهای تخفیف من{rewards.length ? ` (${rewards.length.toLocaleString('fa-IR')})` : ''}
                    </button>
                </div>

                {tab === 'people' &&
                    (referralsLoading ? (
                        <div className='space-y-3'>
                            {[0, 1, 2].map((i) => (
                                <div key={i} className='h-16 animate-pulse rounded-xl bg-gray-100' />
                            ))}
                        </div>
                    ) : referrals.length === 0 ? (
                        <EmptyState
                            title='هنوز کسی با لینک شما ثبت‌نام نکرده'
                            subtitle='لینک دعوت را برای دوستانت بفرست تا اینجا ببینی چه کسانی وارد شده‌اند.'
                        />
                    ) : (
                        <>
                            <ul className='flex flex-col gap-3'>
                                {referrals.map((item) => {
                                    const st = statusStyles[item.status];
                                    return (
                                        <li
                                            key={item.id}
                                            className='flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm'
                                        >
                                            <div className='min-w-0'>
                                                <div className='flex items-center gap-2'>
                                                    <span className='truncate text-sm font-semibold text-gray-800'>
                                                        {item.name || 'کاربر جدید'}
                                                    </span>
                                                    {item.rewarded && (
                                                        <span className='flex items-center gap-0.5 text-tiny font-semibold text-green-600'>
                                                            <CheckIcon />
                                                            جایزه‌دار
                                                        </span>
                                                    )}
                                                </div>
                                                <span dir='ltr' className='text-xs text-gray-400'>
                                                    {item.phone_masked}
                                                </span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className='rounded-md bg-gray-50 px-2 py-0.5 text-tiny text-gray-500'>
                                                    {sourceLabels[item.source]}
                                                </span>
                                                <span
                                                    className={`rounded-md px-2 py-0.5 text-tiny font-semibold ${st.className}`}
                                                >
                                                    {st.label}
                                                </span>
                                                <span className='text-tiny text-gray-400'>
                                                    {formatJalali(new Date(item.joined_at || item.invited_at))}
                                                </span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>

                            {hasMore && (
                                <div className='mt-4 text-center'>
                                    <Button
                                        variant='outline'
                                        size='sm'
                                        loading={loadingMore}
                                        onClick={() => loadReferrals(page + 1)}
                                    >
                                        نمایش بیشتر
                                    </Button>
                                </div>
                            )}
                        </>
                    ))}

                {tab === 'rewards' &&
                    (rewardsLoading ? (
                        <div className='space-y-3'>
                            {[0, 1].map((i) => (
                                <div key={i} className='h-16 animate-pulse rounded-xl bg-gray-100' />
                            ))}
                        </div>
                    ) : rewards.length === 0 ? (
                        <EmptyState
                            title='هنوز کد تخفیفی نگرفته‌اید'
                            subtitle={`به‌ازای هر ${threshold.toLocaleString('fa-IR')} ثبت‌نام موفق، یک کد تخفیف ۱۰٪ برای شما ساخته می‌شود.`}
                        />
                    ) : (
                        <ul className='flex flex-col gap-3'>
                            {rewards.map((reward) => (
                                <li
                                    key={reward.id}
                                    className='flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm'
                                >
                                    <div>
                                        <div className='flex items-center gap-2'>
                                            <span dir='ltr' className='text-gray-850 font-mono text-sm font-bold'>
                                                {reward.discount_code}
                                            </span>
                                            <span className='rounded-md bg-green-100 px-2 py-0.5 text-tiny font-semibold text-green-700'>
                                                ۱۰٪ تخفیف
                                            </span>
                                        </div>
                                        <span className='text-tiny text-gray-400'>
                                            {formatJalali(new Date(reward.created_at))}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => handleCopy(reward.discount_code, 'کد تخفیف')}
                                        className='border-primary-200 bg-primary-50 text-primary-700 hover:bg-primary-100 inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition'
                                    >
                                        <CopyIcon className='size-3.5' />
                                        کپی
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ))}
            </div>

            <p className='text-tiny leading-6 text-gray-400'>
                کدهای تخفیف یک‌بارمصرف‌اند، فقط برای حساب شما معتبرند و ۳۰ روز اعتبار دارند. هنگام تسویه‌حساب در
                سبد خرید وارد کنید.
            </p>
        </div>
    );
};

export default Referral;
