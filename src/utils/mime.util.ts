export const isImage = (url: string) => /\.(png|jpe?g|gif|webp|avif)$/i.test(url);
export const isAudio = (url: string) => /\.(mp3|webm|wav|ogg|m4a)$/i.test(url);
export const isVideo = (url: string) => /\.(mp4|webm|ogg|mov)$/i.test(url);

export const getMediaType = (url: string) => {
    if (/\.(png|jpe?g|gif|webp|avif)$/i.test(url)) return 'image';
    if (/\.(mp3|webm|wav|ogg|m4a)$/i.test(url)) return 'audio';
    if (/\.(mp4|webm|ogg|mov)$/i.test(url)) return 'video';
    return 'unknown';
};

