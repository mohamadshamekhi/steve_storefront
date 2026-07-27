import { StaticImageData } from "next/image";

interface ProductProps {
    id?: string;
    name?: string;
    en_title?: string;
    src?: string | StaticImageData;
    colors?: string[];
    time?: number;
    features?: Record<string, string>[];
    specifications?: {
        key: string;
        value: string;
        name: string;
        unit: string;
    }[];
    is_second_hand?: boolean;
    is_published?: boolean;
    slug?: string;
    rating?: number;
    gallery: {
        media_id: string;
        url: string;
        is_primary: boolean
    }[];
    discount?: {
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
    }[] | {
        id: string;
        code: string;
        type: string;
        value: number;
        starts_at?: string;
        expires_at?: string;
        is_active: boolean;
        created_at: string;
        updated_at: string;
    } | null;
    variant: {
        discountedPrice?: string;
        rate?: number;
        id?: string;
        price?: number | string;
        quantity?: number;
        variant_attribute?: {
            key: string;
            value: string;
            label: string;
            meta: string;
        }[];
        warranty?: string;
        discountPercent?: string | number;
    }[];
}


export type { ProductProps }