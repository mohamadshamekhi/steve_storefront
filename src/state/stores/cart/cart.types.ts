export interface CartVariantAttribute {
    key: string;
    value: string;
    label: string;
    meta: string;
}

export interface CartItemSummary {
    ProductID: string;
    VariantID: string;
    Quantity: number;
    ProductName: string;
    VariantAttributes: CartVariantAttribute[];
    PriceAtTime: number;
    has_stock_issue: boolean;
    has_price_changed: boolean;
    current_price: number;
    discount_amount: number;
}

export interface CartSummary {
    items: CartItemSummary[];
    subtotal: number;
    final_price: number;
    is_ready: boolean;
    discounted_subtotal: number;
}

export interface CartItem {
    product_id: string;
    variant_id: string;
    Quantity: number;
    ProductName: string;
    VariantAttributes: CartVariantAttribute[];
    PriceAtTime: number;
    url: string;
    slug?: string;
    summary: CartSummary;
    discount_amount?: number;
    requires_freight_shipping?: boolean;
}

export interface CartUser {
    id: string;
    name: string;
    phone_number: string;
}

export interface Cart {
    id: string;
    status: 'active' | 'completed' | 'abandoned';
    user: CartUser;
    items: CartItem[];
    created_at: string;
    updated_at: string;
    subtotal: number;
}

export interface CartResponse {
    success: boolean;
    message: string;
    data?: {
        cart: Cart;
    };
}

export interface AddToCartPayload {
    product_id: string;
    variant_id: string;
}

export interface RemoveFromCartPayload {
    product_id: string;
    variant_id: string;
}
