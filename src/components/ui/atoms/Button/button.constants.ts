const size = {
    sm: 'px-3 py-1 text-body3-regular rounded-md',
    md: 'py-[6px] px-[15px] text-body1-regular',
    lg: 'py-[10px] px-[15px] text-body1-regular'
} as const;

const getVariantClasses = ({
    variant,
    color
}: {
    variant: 'fill' | 'outline' | 'light' | 'text' | 'disabled';
    color: 'primary' | 'secondary' | 'danger' | 'green' | 'black';
}): string => {
    const base = 'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none';

    const colorStyles = {
        primary: {
            fill: 'bg-primary-600 text-white hover:bg-primary-700',
            outline: 'bg-transparent border border-primary-600 text-primary-600',
            light: 'bg-primary-50 text-primary-600 hover:bg-primary-100',
            text: 'text-primary-600 border border-transparent hover:border-primary-600',
            disabled: 'bg-gray-300 text-white !cursor-not-allowed'
        },

        danger: {
            fill: 'bg-red-600 text-white hover:bg-red-700',
            outline: 'bg-transparent border border-red-600 text-red-600',
            light: 'bg-red-50 text-red-600 hover:bg-red-100',
            text: 'text-red-600 border border-transparent hover:border-red-600',
            disabled: 'bg-gray-300 text-white !cursor-not-allowed'
        },

        green: {
            fill: 'bg-green-600 text-white hover:bg-green-700',
            outline: 'bg-transparent border border-green-600 text-green-600',
            light: 'bg-green-50 text-green-600 hover:bg-green-100',
            text: 'text-green-600 border border-transparent hover:border-green-600',
            disabled: 'bg-gray-300 text-white !cursor-not-allowed'
        },

        secondary: {
            fill: 'bg-secondary text-white hover:bg-secondary-dark',
            outline: 'bg-transparent border border-secondary text-secondary hover:bg-secondary-100',
            light: 'bg-secondary-50 text-secondary-700',
            text: 'text-secondary-600',
            disabled: 'bg-secondary-300 text-white !cursor-not-allowed'
        },

        black: {
            fill: 'bg-secondary text-white hover:bg-secondary-dark',
            outline: 'bg-transparent border border-gray-400 text-gray-800 hover:border-gray-500',
            light: 'bg-secondary-50 text-secondary-700',
            text: 'text-secondary hover:no-underline',
            disabled: 'bg-secondary-300 text-white !cursor-not-allowed'
        }
    };

    return `${base} ${colorStyles[color][variant]}`;
};

const buttonStyle = {
    size,
    getVariantClasses
};

export default buttonStyle;
