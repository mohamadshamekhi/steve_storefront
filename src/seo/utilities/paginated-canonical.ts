// page 2+ of a listing lists different products, so it must stay its own canonical
// URL - otherwise Google folds it into page 1 and stops following its product links
export const paginatedCanonical = (url: string, pageNumber?: string | string[]) => {
    const page = Number(pageNumber);
    return Number.isInteger(page) && page > 1 ? `${url}?page_number=${page}` : url;
};
