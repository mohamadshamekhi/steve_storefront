import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import {
    ReferralInviteData,
    ReferralInviteErrorCode,
    ReferralLinkData,
    ReferralListData,
    ReferralRewardsData
} from '@/models/referral.model';
import { getCookieUniversal } from '@/utils/cookie.util';

type ServiceResult<T> =
    | { success: true; message?: string; data?: T }
    | { success: false; message: string; code?: string };

/** GET /referral/me/link — کد و لینک دعوت + پیشرفت (اکانت در اولین صدازدن ساخته می‌شود) */
export async function getReferralLink(): Promise<ServiceResult<ReferralLinkData>> {
    const response = await fetcher(ApiKeys.REFERRAL_LINK, 'dashboard', 'GET');

    if (response?.success) {
        return { success: true, data: response.data as ReferralLinkData };
    }

    return { success: false, message: response?.message ?? 'دریافت اطلاعات دعوت با خطا مواجه شد' };
}

/** GET /referral/me/referrals — لیست کسانی که با لینک کاربر وارد شده‌اند */
export async function getMyReferrals(pageNumber = 1, pageSize = 25): Promise<ServiceResult<ReferralListData>> {
    const response = await fetcher(ApiKeys.REFERRAL_REFERRALS, 'dashboard', 'GET', {
        params: { page_number: pageNumber, page_size: pageSize }
    });

    if (response?.success) {
        return { success: true, data: response.data as ReferralListData };
    }

    return { success: false, message: response?.message ?? 'دریافت لیست دعوت‌شده‌ها با خطا مواجه شد' };
}

/** GET /referral/me/rewards — کدهای تخفیفی که کاربر تا الان گرفته */
export async function getMyRewards(): Promise<ServiceResult<ReferralRewardsData>> {
    const response = await fetcher(ApiKeys.REFERRAL_REWARDS, 'dashboard', 'GET');

    if (response?.success) {
        return { success: true, data: response.data as ReferralRewardsData };
    }

    return { success: false, message: response?.message ?? 'دریافت کدهای تخفیف با خطا مواجه شد' };
}

const inviteErrorMessages: Record<ReferralInviteErrorCode | 'default', string> = {
    'referral.already_invited': 'این شماره قبلاً دعوت شده است.',
    'referral.cannot_invite_self': 'نمی‌توانید شماره‌ی خودتان را دعوت کنید.',
    'referral.program_disabled': 'برنامه‌ی دعوت دوستان در حال حاضر غیرفعال است.',
    'referral.sms_failed': 'ارسال پیامک با خطا مواجه شد؛ کمی بعد دوباره تلاش کنید.',
    default: 'ارسال دعوت با خطا مواجه شد.'
};

/**
 * POST /referral/invite — سرور تلاش می‌کند پیامکِ لینک دعوت را برای این شماره بفرستد.
 * همیشه روی موفقیت ۲۰۰ برمی‌گردد؛ نتیجه‌ی واقعیِ پیامک در `data.sms_sent` است
 * (اگر false باشد باید لینک `data.url` را دستی به کاربر نشان داد).
 * از fetch خام استفاده می‌کنیم تا کدهای خطا را به پیام فارسی تبدیل کنیم و
 * toastِ خام پیش‌فرضِ `fetcher` نمایش داده نشود.
 */
export async function inviteByPhone(phoneNumber: string): Promise<ServiceResult<ReferralInviteData>> {
    const token = await getCookieUniversal('steve-session');
    if (!token) {
        return { success: false, message: 'برای ارسال دعوت باید وارد حساب شوید.' };
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ApiKeys.REFERRAL_INVITE}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ phone_number: phoneNumber })
        });

        const json = await res.json().catch(() => null);

        if (res.ok && json?.success) {
            return {
                success: true,
                message: json?.message,
                data: {
                    referral_id: json?.data?.referral_id,
                    sms_sent: json?.data?.sms_sent ?? true,
                    url: json?.data?.url ?? ''
                }
            };
        }

        const code: string | undefined = json?.code ?? json?.errors?.code ?? json?.error;
        const message =
            inviteErrorMessages[(code as ReferralInviteErrorCode) ?? 'default'] ??
            json?.message ??
            inviteErrorMessages.default;

        return { success: false, message, code };
    } catch {
        return { success: false, message: 'خطا در ارتباط با سرور' };
    }
}
