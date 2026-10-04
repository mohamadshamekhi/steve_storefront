interface Categories {
    id: string;
    name: string;
    description: string;
    url: string;
    link: string;
    level: number;
    slug: string;
    parent_id?: string | null;
}

export default Categories;
