import cn from '@/config/utilities/cn';
import { JALALI_MONTHS, currentJalaliYear, jalaliMonthLength } from '@/utils/date.util';
import React, { useMemo } from 'react';

export type JalaliDate = { year: number | null; month: number | null; day: number | null };

type BirthDateSelectProps = {
    id: string;
    value: JalaliDate;
    onChange: (value: JalaliDate) => void;
    error?: string;
    required?: boolean;
};

const MAX_AGE_YEARS = 100;

const faNumber = (n: number) => n.toLocaleString('fa-IR', { useGrouping: false });

const selectClass =
    'focus:border-primary-500 focus:ring-primary-100 min-h-11 w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 transition-colors focus:ring-2 focus:outline-none';

/** انتخاب تاریخ تولد شمسی با سه select بومی (روز / ماه / سال) — بدون وابستگی و مناسب موبایل */
const BirthDateSelect: React.FC<BirthDateSelectProps> = ({ id, value, onChange, error, required }) => {
    const thisYear = useMemo(() => currentJalaliYear(), []);
    const years = useMemo(
        () => Array.from({ length: MAX_AGE_YEARS + 1 }, (_, i) => thisYear - i),
        [thisYear]
    );
    // بدون سال، اسفند را ۳۰ روزه فرض می‌کنیم تا انتخاب کاربر محدود نشود
    const daysInMonth = value.month ? jalaliMonthLength(value.year ?? 1403, value.month) : 31;

    const update = (patch: Partial<JalaliDate>) => {
        const next = { ...value, ...patch };
        // مثلاً ۳۱ انتخاب شده و ماه به مهر عوض شده — روز نامعتبر را پاک کن
        if (next.day && next.month && next.day > jalaliMonthLength(next.year ?? 1403, next.month)) {
            next.day = null;
        }
        onChange(next);
    };

    const errorId = `${id}-error`;
    const invalidClass = error ? 'border-red-500' : '';
    const toNumber = (v: string) => (v ? Number(v) : null);

    return (
        <fieldset className='w-full' aria-describedby={error ? errorId : undefined}>
            <legend className='mb-1.5 block text-sm font-medium text-gray-700'>
                تاریخ تولد {required && <span className='text-red-500'>*</span>}
            </legend>
            {/* نسبت ستون‌ها: نام ماه از روز و سال بلندتر است */}
            <div className='grid gap-2' style={{ gridTemplateColumns: '2fr 3fr 2.5fr' }}>
                <select
                    id={`${id}-day`}
                    aria-label='روز تولد'
                    aria-invalid={!!error}
                    className={cn(selectClass, invalidClass)}
                    value={value.day ?? ''}
                    onChange={(e) => update({ day: toNumber(e.target.value) })}
                >
                    <option value=''>روز</option>
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                        <option key={d} value={d}>
                            {faNumber(d)}
                        </option>
                    ))}
                </select>
                <select
                    id={`${id}-month`}
                    aria-label='ماه تولد'
                    aria-invalid={!!error}
                    className={cn(selectClass, invalidClass)}
                    value={value.month ?? ''}
                    onChange={(e) => update({ month: toNumber(e.target.value) })}
                >
                    <option value=''>ماه</option>
                    {JALALI_MONTHS.map((name, i) => (
                        <option key={name} value={i + 1}>
                            {name}
                        </option>
                    ))}
                </select>
                <select
                    id={`${id}-year`}
                    aria-label='سال تولد'
                    aria-invalid={!!error}
                    className={cn(selectClass, invalidClass)}
                    value={value.year ?? ''}
                    onChange={(e) => update({ year: toNumber(e.target.value) })}
                >
                    <option value=''>سال</option>
                    {years.map((y) => (
                        <option key={y} value={y}>
                            {faNumber(y)}
                        </option>
                    ))}
                </select>
            </div>
            {error ? (
                <p id={errorId} className='mt-1 text-xs text-red-500'>
                    {error}
                </p>
            ) : (
                <p className='mt-1 text-xs text-gray-400'>برای هدیه‌ی تولدتان یک کد تخفیف ویژه می‌فرستیم.</p>
            )}
        </fieldset>
    );
};

export default BirthDateSelect;
