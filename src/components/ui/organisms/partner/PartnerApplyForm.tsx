'use client';

import { partnerApplySchema, PartnerApplyFormValues } from '@/config/schema/partner.schema';
import { useToast } from '@/hooks/useToast';
import { applyPartnership } from '@/services/partner.service';
import { toEnglishDigits } from '@/utils/string.util';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Fieldset from '../../molecules/Fieldset/Fieldset';

interface Props {
    /** مقادیر اولیه فرم (مثلاً کد ملی از پروفایل یا نام شرکت از درخواست رد شده) */
    initialValues?: Partial<PartnerApplyFormValues>;
    /** متن دکمه ثبت */
    submitLabel?: string;
    /** بعد از ثبت موفق درخواست */
    onApplied?: () => void;
    /** فرم غیرفعال است (مثلاً کاربر لاگین نیست و لایه‌ی روی فرم نمایش داده می‌شود) */
    locked?: boolean;
}

const emptyValues: PartnerApplyFormValues = {
    company_name: '',
    national_id: '',
    business_field: '',
    city: ''
};

/** خطاهای اعتبارسنجی فیلدی که بک‌اند در errors برمی‌گرداند را به فرمت فرمیک تبدیل می‌کند */
const normalizeFieldErrors = (errors: unknown): Partial<Record<keyof PartnerApplyFormValues, string>> => {
    if (!errors || typeof errors !== 'object') return {};

    return Object.entries(errors as Record<string, unknown>).reduce(
        (acc, [key, value]) => {
            if (key in emptyValues) {
                acc[key as keyof PartnerApplyFormValues] = Array.isArray(value) ? String(value[0]) : String(value);
            }
            return acc;
        },
        {} as Partial<Record<keyof PartnerApplyFormValues, string>>
    );
};

const inputError = (touched?: boolean, error?: string) =>
    `max-w-full! ${touched && error ? 'border-red-500' : ''}`;

const PartnerApplyForm = ({ initialValues, submitLabel = 'ثبت درخواست همکاری', onApplied, locked = false }: Props) => {
    const { showToast } = useToast();

    const formik = useFormik<PartnerApplyFormValues>({
        enableReinitialize: true,
        initialValues: { ...emptyValues, ...initialValues },
        validationSchema: toFormikValidationSchema(partnerApplySchema),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            const res = await applyPartnership({
                company_name: values.company_name.trim(),
                national_id: toEnglishDigits(values.national_id).trim(),
                business_field: values.business_field.trim(),
                city: values.city.trim()
            });

            if (res.success) {
                showToast({
                    title: 'درخواست همکاری',
                    message: res.message ?? 'درخواست همکاری شما ثبت شد و در حال بررسی است.',
                    type: 'success'
                });
                onApplied?.();
            } else {
                const fieldErrors = normalizeFieldErrors(res.errors);
                if (Object.keys(fieldErrors).length > 0) {
                    setErrors(fieldErrors);
                } else {
                    showToast({
                        title: 'درخواست همکاری',
                        message: res.message ?? 'ثبت درخواست همکاری با خطا مواجه شد',
                        type: 'error'
                    });
                }
            }

            setSubmitting(false);
        }
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            inert={locked}
            className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7'
        >
            <div className='grid gap-x-5 gap-y-4 sm:grid-cols-2'>
                <Fieldset name='company_name' errors={formik.errors} touched={formik.touched}>
                    <label htmlFor='partner-company_name' className='mb-1 block text-sm font-medium text-gray-700'>
                        نام شرکت / فروشگاه
                    </label>
                    <Input
                        id='partner-company_name'
                        name='company_name'
                        value={formik.values.company_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='نام شرکت یا فروشگاه'
                        maxLength={150}
                        className={inputError(formik.touched.company_name, formik.errors.company_name)}
                    />
                </Fieldset>

                <Fieldset name='national_id' errors={formik.errors} touched={formik.touched}>
                    <label htmlFor='partner-national_id' className='mb-1 block text-sm font-medium text-gray-700'>
                        کد ملی
                    </label>
                    <Input
                        id='partner-national_id'
                        name='national_id'
                        value={formik.values.national_id}
                        onChange={(e) =>
                            formik.setFieldValue('national_id', toEnglishDigits(e.target.value).replace(/\D/g, ''))
                        }
                        onBlur={formik.handleBlur}
                        placeholder='کد ملی ۱۰ رقمی'
                        inputMode='numeric'
                        maxLength={10}
                        className={inputError(formik.touched.national_id, formik.errors.national_id)}
                    />
                </Fieldset>

                <Fieldset name='business_field' errors={formik.errors} touched={formik.touched}>
                    <label htmlFor='partner-business_field' className='mb-1 block text-sm font-medium text-gray-700'>
                        زمینه فعالیت
                    </label>
                    <Input
                        id='partner-business_field'
                        name='business_field'
                        value={formik.values.business_field}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='مثلاً خرده‌فروشی موبایل'
                        maxLength={150}
                        className={inputError(formik.touched.business_field, formik.errors.business_field)}
                    />
                </Fieldset>

                <Fieldset name='city' errors={formik.errors} touched={formik.touched}>
                    <label htmlFor='partner-city' className='mb-1 block text-sm font-medium text-gray-700'>
                        شهر
                    </label>
                    <Input
                        id='partner-city'
                        name='city'
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='شهر محل فعالیت'
                        maxLength={100}
                        className={inputError(formik.touched.city, formik.errors.city)}
                    />
                </Fieldset>
            </div>

            <div className='mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center'>
                <Button type='submit' size='lg' loading={formik.isSubmitting} className='w-full sm:w-auto'>
                    {submitLabel}
                </Button>
                <span className='text-xs leading-6 text-gray-500'>
                    پس از ثبت، درخواست شما بررسی و نتیجه اطلاع داده می‌شود.
                </span>
            </div>
        </form>
    );
};

export default PartnerApplyForm;
