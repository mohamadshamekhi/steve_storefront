export type PartnerStatus = 'pending' | 'approved' | 'rejected' | 'suspended';

export interface PartnerApplyPayload {
    company_name: string;
    national_id: string;
    business_field: string;
    city: string;
}

export interface PartnerApplyData {
    id: string;
    status: PartnerStatus;
}

export interface PartnerMeData {
    has_partnership: boolean;
    status?: PartnerStatus;
    discount_percent?: number;
    rejection_reason?: string;
    company_name?: string;
}
