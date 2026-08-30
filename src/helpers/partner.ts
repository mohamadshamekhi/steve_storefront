import { PartnerMeData } from '@/models/partner.model';

export type PartnerViewTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export interface PartnerStatusView {
    tone: PartnerViewTone;
    title: string;
    description: string;
    /** آیا در این وضعیت امکان ارسال/ارسال مجدد فرم درخواست وجود دارد */
    canApply: boolean;
}

/** متن و لحن نمایش وضعیت همکاری بر اساس پاسخ GET /partner/me */
export const getPartnerStatusView = (data: PartnerMeData | null): PartnerStatusView => {
    if (!data || !data.has_partnership) {
        return {
            tone: 'neutral',
            title: 'هنوز درخواست همکاری ثبت نکرده‌اید',
            description: 'با ثبت درخواست همکاری فروش، پس از تایید می‌توانید محصولات را با قیمت ویژه همکاران تهیه کنید.',
            canApply: true
        };
    }

    switch (data.status) {
        case 'pending':
            return {
                tone: 'info',
                title: 'درخواست همکاری در حال بررسی است',
                description: 'درخواست شما ثبت شده و توسط کارشناسان استیو موبایل در حال بررسی است. نتیجه به شما اطلاع داده می‌شود.',
                canApply: false
            };
        case 'approved':
            return {
                tone: 'success',
                title: 'همکاری شما تایید شده است',
                description:
                    typeof data.discount_percent === 'number'
                        ? `درصد تخفیف اختصاصی شما ${data.discount_percent}٪ است.`
                        : 'اکنون می‌توانید وارد پنل همکار شوید.',
                canApply: false
            };
        case 'rejected':
            return {
                tone: 'danger',
                title: 'درخواست همکاری رد شده است',
                description: data.rejection_reason
                    ? `دلیل: ${data.rejection_reason}`
                    : 'درخواست شما تایید نشد. می‌توانید اطلاعات را اصلاح و دوباره ارسال کنید.',
                canApply: true
            };
        case 'suspended':
            return {
                tone: 'warning',
                title: 'همکاری شما تعلیق شده است',
                description: 'دسترسی شما به قیمت همکاری موقتاً غیرفعال شده است. برای پیگیری با پشتیبانی در تماس باشید.',
                canApply: false
            };
        default:
            return {
                tone: 'neutral',
                title: 'وضعیت همکاری',
                description: 'اطلاعات وضعیت همکاری در دسترس نیست.',
                canApply: false
            };
    }
};

export const partnerToneClasses: Record<PartnerViewTone, string> = {
    neutral: 'border-gray-200 bg-gray-50',
    info: 'border-primary-200 bg-primary-50',
    success: 'border-green-200 bg-green-50',
    warning: 'border-yellow-200 bg-yellow-50',
    danger: 'border-red-200 bg-red-50'
};
