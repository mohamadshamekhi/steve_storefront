export function isPaymentSuccess(status?: string | null): boolean {
    return status === 'success';
}

export function getPaymentMessage(status?: string | null): string {
    switch (status) {
        case 'success':
            return 'پرداخت موفق';
        case 'failed':
            return 'پرداخت ناموفق';
        case 'cancelled':
            return '⚠️ پرداخت لغو شد';
        default:
            return 'ℹ️وضعیت پرداخت مشخص نیست';
    }
}
