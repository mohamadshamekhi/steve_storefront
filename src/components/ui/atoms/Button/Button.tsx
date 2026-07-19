import LoadingIcon from '@/components/icons/LoadingIcon';
import cn from '@/config/utilities/cn';
import { forwardRef } from 'react';
import buttonStyle from './button.constants';
import ButtonProps from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'fill',
            size = 'md',
            color = 'primary',
            className = '',
            children,
            icon,
            iconPosition = 'start',
            loading = false,
            ...props
        },
        ref
    ) => {
        const baseClasses = cn('cursor-pointer text-center', className);
        const variantClasses = buttonStyle.getVariantClasses({
            variant,
            color
        });
        const sizeClasses = buttonStyle.size[size];
        const combinedClassName = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

        return (
            <button ref={ref} className={combinedClassName} {...props}>
                <span className='relative inline-flex items-center justify-center'>
                    <span className={loading ? 'invisible inline-flex items-center' : 'inline-flex items-center'}>
                        {icon && iconPosition === 'start' && (
                            <span className={`${children && icon ? 'ml-2' : ''}`}>{icon}</span>
                        )}
                        {children}
                        {icon && iconPosition === 'end' && (
                            <span className={`${children && icon ? 'mr-2' : ''}`}>{icon}</span>
                        )}
                    </span>
                    {loading && (
                        <span className='absolute'>
                            <LoadingIcon />
                        </span>
                    )}
                </span>
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
