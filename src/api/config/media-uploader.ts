import { getCookieUniversal } from '@/utils/cookie.util';

interface MediaUploadProps {
    file: File;
    domain: string;
    isPublic?: boolean;
    convertToWebp?: boolean;
}

interface MediaUploadResponse {
    success: boolean;
    message: string;
    data?: {
        id: string;
        url: string;
    };
}

const mediaUploader = async ({
    file,
    domain,
    isPublic = true,
    convertToWebp = true
}: MediaUploadProps): Promise<MediaUploadResponse> => {
    const access_token = await getCookieUniversal('steve-session');

    if (!access_token || access_token.length < 5) {
        return {
            success: false,
            message: 'برای آپلود تصویر باید وارد حساب کاربری شوید'
        };
    }

    const formData = new FormData();
    formData.append('domain', domain);
    formData.append('file', file);
    formData.append('is_public', String(isPublic));
    formData.append('convert_to_webp', String(convertToWebp));

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/media/storefront/upload`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
                body: formData
            }
        );

        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'خطا در آپلود تصویر'
        };
    }
};

export default mediaUploader;
