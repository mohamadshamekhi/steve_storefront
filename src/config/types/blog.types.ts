interface Blog {
    id: string;
    title: string;
    slug: string;
    is_published: boolean;
    media_url: string;
    created_at: string;
    updated_at: string;
    body: string;
    tags?: string[];
    meta_description?: string;
    back_office_id?: string;
    back_office_name?: string;
    alt: string;
    view_count?: number;
}

export default Blog;
