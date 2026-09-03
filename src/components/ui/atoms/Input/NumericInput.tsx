import { toEnglishDigits } from '@/utils/string.util';
import { ChangeEvent } from 'react';
import Input from './Input';
import InputTextProps from './input.types';

interface NumericInputProps extends InputTextProps {
    /** حذف هر کاراکتری جز رقم (پیش‌فرض: true) */
    digitsOnly?: boolean;
}

/**
 * مثل `Input` معمولی، اما ورودی کاربر را همان لحظه نرمال می‌کند:
 * ارقام فارسی/عربی به انگلیسی تبدیل می‌شوند و (به‌صورت پیش‌فرض) هر
 * کاراکتر غیرعددی حذف می‌شود. رویداد اصلاح‌شده به `onChange` پاس داده
 * می‌شود، پس با `formik.handleChange` هم بدون تغییر کار می‌کند.
 */
const NumericInput = ({ digitsOnly = true, onChange, inputMode = 'numeric', ...props }: NumericInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let next = toEnglishDigits(e.target.value);
        if (digitsOnly) {
            next = next.replace(/\D/g, '');
        }
        if (next !== e.target.value) {
            e.target.value = next;
        }
        onChange?.(e);
    };

    return <Input {...props} inputMode={inputMode} onChange={handleChange} />;
};

export default NumericInput;
