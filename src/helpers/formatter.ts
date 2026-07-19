const priceFormatter = (price: string | number | undefined): string => {
    if (price === undefined) return '';

    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
    return `${numericPrice.toLocaleString('fa-IR')}`;
};

export default priceFormatter;
