export type OrderDeliveryInfo = {
    order_id: string;
    status: string;
    status_label: string;
    masked_phone: string;
    can_confirm: boolean;
};

export type OrderDeliveryInvoiceItem = {
    product_name: string;
    variant_label: string;
    quantity: number;
    unit_price: number;
    discount: number;
    total: number;
};

export type OrderDeliveryInvoice = {
    order_id: string;
    status: string;
    status_label: string;
    items: OrderDeliveryInvoiceItem[];
    subtotal: number;
    shipping_cost: number;
    discount: number;
    final_amount: number;
    shipping_address: {
        title: string;
        province: string;
        city: string;
        street: string;
        postcode: string;
    };
    created_at: string;
};

export type OrderDeliveryVerifyResponse = {
    order_id: string;
    status: string;
    invoice: OrderDeliveryInvoice;
    invoice_token: string;
    invoice_token_expires_in: number;
};
