export interface ReferralLinkData {
    code: string;
    url: string;
    total_joined: number;
    pending_progress: number;
    reward_threshold: number;
    next_reward_in: number;
    rewards_earned: number;
}

export type ReferralSource = 'link' | 'sms';
export type ReferralStatus = 'invited' | 'joined';

export interface ReferralItem {
    id: string;
    name: string | null;
    phone_masked: string;
    source: ReferralSource;
    status: ReferralStatus;
    rewarded: boolean;
    invited_at: string;
    joined_at: string | null;
}

export interface ReferralListData {
    pagination: {
        page_size: number;
        page_number: number;
        total: number;
    };
    items: ReferralItem[];
    total_joined: number;
    pending_progress: number;
    reward_threshold: number;
    next_reward_in: number;
}

export interface ReferralReward {
    id: string;
    discount_code: string;
    created_at: string;
}

export interface ReferralRewardsData {
    items: ReferralReward[];
}

/** پاسخ موفق POST /referral/invite — همیشه ۲۰۰؛ باید `sms_sent` را چک کرد نه صرفِ success */
export interface ReferralInviteData {
    referral_id: string;
    /** اگر false باشد، لینک به‌صورت دستی به کاربر نشان داده می‌شود */
    sms_sent: boolean;
    /** لینک دعوت مخصوص همین شماره — برای اشتراک دستی وقتی پیامک نرفت */
    url: string;
}

/** کدهای خطای اندپوینت POST /referral/invite */
export type ReferralInviteErrorCode =
    | 'referral.already_invited'
    | 'referral.cannot_invite_self'
    | 'referral.program_disabled'
    | 'referral.sms_failed';
