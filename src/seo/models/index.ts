export interface PageSeoModel {
    title: string;
    description: string;
    tags: string;
    canonical: string;
    og_title: string;
    og_url: string;
    og_description: string;
    og_sitename: string;
    og_image?: {
        data: {
            attributes: {
                url: string;
                alternativeText: string;
                width: number;
                height: number;
            };
        };
    };
    noindex: boolean;
    nofollow: boolean;
}
