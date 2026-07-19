export type Banner = {
    id: string;
    title: string;
    media_id: string;
    image_url: string;
    link: string;
    location: 'top' | 'middle' | 'bottom';
    sort_order: number;
    is_active: boolean;
    alt_text: string;
    created_at: string;
};

export type BannerResponse = {
    success: boolean;
    message: string;
    data: {
        banners: Banner[];
    };
};

export type Comment = {
    id: string;
    body: string;
    commentable_type: 'product' | 'article';
    commentable_id: string;
    commenter_id: string;
    commenter_type: string;
    commenter_name: string;
    level: number;
    is_approved: boolean;
    created_at: string;
    updated_at: string;
    children: Comment[];
};

export type CommentResponse = {
    success: boolean;
    message: string;
    data: {
        comments: Comment[];
        all_approved_comments_count: number;
    };
};

export type AddCommentPayload = {
    body: string;
    commentable_type: 'product' | 'article';
    commentable_id: string;
    parent_id?: string;
};

