// صفحه‌ی مقصدِ QR تحویل سفارش (/order/delivery/:token) — همه public
const orderDeliveryKeys = {
    GET_ORDER_DELIVERY: (token: string) => `/order/delivery/${encodeURIComponent(token)}`,
    ORDER_DELIVERY_SEND_OTP: (token: string) => `/order/delivery/${encodeURIComponent(token)}/send-otp`,
    ORDER_DELIVERY_VERIFY: (token: string) => `/order/delivery/${encodeURIComponent(token)}/verify`,
    ORDER_DELIVERY_INVOICE: (token: string) => `/order/delivery/${encodeURIComponent(token)}/invoice`
};

export default orderDeliveryKeys;
