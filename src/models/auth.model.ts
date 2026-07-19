export interface SignInModel {
    phone_number: string;
}

export interface VerifySignInModel {
    code: string;
}

export interface UserResponse {
    sub: string;
    exp: number;
    entity_id: string;
    kind: string;
    role_keys: string[];
    permission_keys: string[];
}

export interface AddressItem {
    id: string;
    title: string;
    province: string;
    city: string;
    street: string;
    postcode?: string;
}

export interface ProfileResponse {
    _id: string;
    name: string;
    phone_number: string;
    national_code?: string;
    created_at?: string;
    addresses: AddressItem[];
}

export interface JWT {
    sub: string;
    exp: number;
    entity_id: string;
    kind: string;
    role_keys: string[];
    permission_keys: string[];
}
