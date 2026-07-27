export default function isIranianPhoneNumber(phoneNumber: string): boolean {
    const sanitized = phoneNumber.replace(/[\s\-\_]/g, '');

    const regex = /^(?:\+98|0098|98|0)?9\d{9}$/;

    return regex.test(sanitized);
}
