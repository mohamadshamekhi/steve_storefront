import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { PartnerApplyPayload, PartnerMeData } from '@/models/partner.model';

type ServiceResult<T> =
    | { success: true; message?: string; data?: T }
    | { success: false; message: string; errors?: Record<string, unknown> | null };

/**
 * ثبت درخواست همکاری فروش — POST /partner/apply
 * مستقیم از سمت کلاینت با توکن کاربر (Bearer) صدا زده می‌شود.
 */
export async function applyPartnership(payload: PartnerApplyPayload): Promise<ServiceResult<{ id: string }>> {
    const response = await fetcher(ApiKeys.PARTNER_APPLY, 'dashboard', 'POST', {
        body: { ...payload }
    });

    if (response?.success) {
        return { success: true, message: response.message, data: response.data };
    }

    return {
        success: false,
        message: response?.message ?? 'ثبت درخواست همکاری با خطا مواجه شد',
        errors: response?.errors ?? null
    };
}

/**
 * بررسی وضعیت همکاری کاربر جاری — GET /partner/me
 */
export async function getPartnershipStatus(): Promise<ServiceResult<PartnerMeData>> {
    const response = await fetcher(ApiKeys.PARTNER_ME, 'dashboard', 'GET');

    if (response?.success) {
        return { success: true, data: response.data as PartnerMeData };
    }

    return {
        success: false,
        message: response?.message ?? 'دریافت وضعیت همکاری با خطا مواجه شد'
    };
}
