export interface ProductDiscount {
    discount_id: string;
    discount_type: string;
    discount_value: number;
    start_at?: string;
    expires_at?: string;
    is_active: boolean;
    is_special?: boolean;
    applicable_to?: string;
    variant_id?: string;
    product_id?: string;
}

export interface SingleProductItem {
    _id: string;
    name: string;
    en_title: string;
    slug: string;
    discount?: ProductDiscount[] | null;
    brand: {
        id: string;
        name: string;
        description: string;
        url: string;
    };
    category: {
        id: string;
        name: string;
        description: string;
        url: string;
        level: number;
        slug: string;
        ancestors: Array<{
            ID: string;
            Name: string;
            Slug: string;
            Level: number;
        }>;
        attribute_set: Array<{
            id: string;
            key: string;
            name: string;
            unit: string;
        }>;
    };
    gallery: Array<{
        media_id: string;
        url: string;
        is_primary: boolean;
    }>;
    is_published: boolean;
    is_second_hand: boolean;
    description: string;
    rating: number;
    variants: Array<{
        id: string;
        price: number;
        quantity: number;
        variant_attribute: Array<{
            key: string;
            value: string;
            label: string;
            meta: string;
        }>;
        warranty: string;
    }>;
    specifications: Array<{
        key: string;
        value: string;
        name: string;
    }>;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

