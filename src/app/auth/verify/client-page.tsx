"use client";
import { signInAction, signInVerifyAction } from "@/actions/auth.action";
import ChevronLeft from "@/components/icons/ChevronLeft";
import Input from "@/components/ui/atoms/Input/Input";
import Fieldset from "@/components/ui/molecules/Fieldset/Fieldset";
import BirthDateSelect, {
  JalaliDate,
} from "@/components/ui/molecules/BirthDateSelect/BirthDateSelect";
import AuthFormWrapper from "@/components/ui/organisms/auth/AuthFormWrapper";
import { authOTPValidationSchema } from "@/config/schema/auth";
import useOtpCountdown from "@/hooks/useOtpCountdown";
import { useToast } from "@/hooks/useToast";
import { useSessionStore } from "@/state";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import OtpInput from "react-otp-input";
import {
  clearStoredRef,
  getStoredRef,
  isValidRef,
  setStoredRef,
} from "@/utils/referral.util";
import { toEnglishDigits } from "@/utils/string.util";
import { jalaliToIsoDate } from "@/utils/date.util";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

type authModel = z.infer<typeof authOTPValidationSchema>;

const VerifyPage = () => {
  const searchParams = useSearchParams();
  const phoneNumber = searchParams.get("phone_number");
  // send-otp پاسخِ is_new_user را داده و sign-in آن را با ?new=1 پاس کرده
  const isNewUser = searchParams.get("new") === "1";
  const redirectParam =
    searchParams.get("redirect") || searchParams.get("callbackUrl");
  // فقط مسیرهای داخلی مجاز است (جلوگیری از open redirect)
  const redirect =
    redirectParam &&
    redirectParam.startsWith("/") &&
    !redirectParam.startsWith("//")
      ? redirectParam
      : null;

  const [isPending, startTransition] = useTransition();
  const { showToast } = useToast();
  const router = useRouter();

  const updateSession = useSessionStore((state) => state.updateSession);

  // نام — اجباری فقط برای کاربر جدید
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  // تاریخ تولد (شمسی) — اجباری فقط برای کاربر جدید
  const [birthDate, setBirthDate] = useState<JalaliDate>({
    year: null,
    month: null,
    day: null,
  });
  const [birthDateError, setBirthDateError] = useState("");

  // کد دعوت (اختیاری) — toggle
  const [refCode, setRefCode] = useState("");
  const [hasStoredRef, setHasStoredRef] = useState(false);
  const [showRefInput, setShowRefInput] = useState(false);
  const showRefField = isNewUser || hasStoredRef;

  useEffect(() => {
    const stored = getStoredRef();
    if (stored) {
      setRefCode(stored);
      setHasStoredRef(true);
      setShowRefInput(true);
    }
  }, []);

  /** کدِ مؤثر: مقدار تایپ‌شده اگر معتبر باشد، وگرنه کدِ ذخیره‌شده از لینک دعوت */
  const resolveRef = () => {
    const typed = refCode.trim().toUpperCase();
    if (isValidRef(typed)) {
      setStoredRef(typed);
      return typed;
    }
    return getStoredRef();
  };

  const { start, isDisabled, formatted } = useOtpCountdown({
    duration: 180,
    storageKey: "otp-end",
  });

  useEffect(() => {
    if (!isDisabled) {
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResendOTP = async () => {
    await signInAction({ phone_number: phoneNumber! });
    start();
  };

  const submitHandler = async (data: authModel) => {
    // نام و تاریخ تولد برای کاربر جدید اجباری است (بکند هم همین را چک می‌کند)
    let signup: { name: string; birth_date: string } | undefined;
    if (isNewUser) {
      const nameErr = validateName(firstName);
      const birthErr = validateBirthDate(birthDate);
      setFirstNameError(nameErr);
      setBirthDateError(birthErr);
      if (nameErr || birthErr) return;
      signup = {
        name: firstName.trim(),
        birth_date: jalaliToIsoDate(
          birthDate.year!,
          birthDate.month!,
          birthDate.day!
        ),
      };
    }

    startTransition(async () => {
      try {
        const res = await signInVerifyAction({
          phone_number: phoneNumber,
          ...data,
          ...signup,
          ref: resolveRef(),
        });
        if (res.success) {
          clearStoredRef();
          showToast({
            title: "احراز هویت | تاییدیه ورود",
            message: res.message,
            type: "success",
          });
          await updateSession();
          router.push(redirect || "/dashboard");
        } else {
          showToast({
            title: "احراز هویت | تاییدیه ورود",
            message: res?.message || "کد تایید یا اطلاعات وارد شده نادرست است",
            type: "error",
          });
        }
      } catch (error) {
        showToast({
          title: "احراز هویت | تاییدیه ورود",
          message: error instanceof Error ? error.message : "خطایی رخ داده است",
          type: "error",
        });
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: toFormikValidationSchema(authOTPValidationSchema),
    onSubmit: submitHandler,
  });

  return (
    <div className="text-right">
      <h1 className="sr-only">استیو موبایل</h1>
      <h2 className="text-xl font-bold text-gray-900">تأیید شماره موبایل</h2>
      <p className="mt-2 mb-7 text-sm leading-7 text-gray-500">
        کد ۵ رقمی ارسال‌شده به شماره{" "}
        <span dir="ltr" className="font-semibold text-gray-700">
          {phoneNumber}
        </span>{" "}
        را وارد کنید.
      </p>
      <AuthFormWrapper loading={isPending} onSubmit={formik.handleSubmit}>
        {isNewUser && (
          <div className="w-full">
            <label
              htmlFor="first_name"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              نام و نام خانوادگی <span className="text-red-500">*</span>
            </label>
            <Input
              id="first_name"
              name="first_name"
              placeholder="مثلاً علی محمدی"
              className={`max-w-full! ${firstNameError ? "border-red-500" : ""}`}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (firstNameError) setFirstNameError(validateName(e.target.value));
              }}
              autoComplete="name"
              maxLength={100}
              aria-invalid={!!firstNameError}
              aria-describedby={firstNameError ? "first-name-error" : undefined}
            />
            {firstNameError && (
              <p id="first-name-error" className="mt-1 text-xs text-red-500">
                {firstNameError}
              </p>
            )}
          </div>
        )}

        {isNewUser && (
          <BirthDateSelect
            id="birth_date"
            required
            value={birthDate}
            onChange={(v) => {
              setBirthDate(v);
              if (birthDateError) setBirthDateError(validateBirthDate(v));
            }}
            error={birthDateError}
          />
        )}

        {showRefField && (
          <div className="w-full">
            {!showRefInput ? (
              <button
                type="button"
                onClick={() => setShowRefInput(true)}
                className="text-primary-600 hover:text-primary-700 cursor-pointer text-sm font-medium transition"
              >
                + کد دعوت دارم
              </button>
            ) : (
              <>
                <label
                  htmlFor="ref_code"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  کد دعوت{" "}
                  <span className="font-normal text-gray-400">(اختیاری)</span>
                </label>
                <Input
                  id="ref_code"
                  name="ref_code"
                  dir="ltr"
                  placeholder="مثلاً STV-8K3QP"
                  autoCapitalize="characters"
                  autoFocus
                  className="max-w-full! text-left uppercase placeholder:normal-case placeholder:text-gray-400"
                  value={refCode}
                  onChange={(e) => setRefCode(e.target.value)}
                />
                {refCode.trim() &&
                  !isValidRef(refCode.trim().toUpperCase()) && (
                    <p className="mt-1 text-xs text-red-500">
                      فرمت کد دعوت درست نیست.
                    </p>
                  )}
              </>
            )}
          </div>
        )}

        <Fieldset
          name="code"
          touched={formik.touched}
          errors={formik.errors}
          className="w-full"
        >
          <OtpInput
            value={formik.values.code}
            onChange={(val) =>
              formik.setFieldValue(
                "code",
                toEnglishDigits(val).replace(/\D/g, "")
              )
            }
            numInputs={5}
            shouldAutoFocus={!isNewUser}
            inputStyle={{
              direction: "ltr",
              width: "52px",
              height: "56px",
              fontSize: "1.5rem",
              fontWeight: 700,
              borderRadius: "14px",
              border: "none",
              borderBottom: "2.5px solid #E5E7EB",
              textAlign: "center",
              backgroundColor: "#F3F4F6",
              outline: "none",
              color: "#5a4fcf",
              transition: "background-color 0.15s, border-color 0.15s",
            }}
            containerStyle={{
              direction: "ltr",
              display: "flex",
              justifyContent: "center",
              gap: "8px",
            }}
            renderInput={(props) => (
              <input
                dir="ltr"
                {...props}
                inputMode="numeric"
                onFocus={(e) => {
                  e.target.style.backgroundColor = "#EDE9FE";
                  e.target.style.borderBottomColor = "#5a4fcf";
                  props.onFocus?.(e);
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = e.target.value ? "#EDE9FE" : "#F3F4F6";
                  e.target.style.borderBottomColor = e.target.value ? "#5a4fcf" : "#E5E7EB";
                  props.onBlur?.(e);
                }}
              />
            )}
          />
        </Fieldset>
      </AuthFormWrapper>

      <div className="mt-6 flex items-center justify-between gap-3">
        {isDisabled ? (
          <p className="text-sm text-gray-400">ارسال مجدد کد تا {formatted}</p>
        ) : (
          <button
            type="button"
            onClick={handleResendOTP}
            className="text-primary-600 hover:text-primary-700 cursor-pointer text-sm font-semibold transition"
          >
            ارسال مجدد کد
          </button>
        )}
        <Link
          href="/auth/sign-in"
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition hover:text-gray-700"
        >
          ویرایش شماره
          <ChevronLeft />
        </Link>
      </div>
    </div>
  );
};

function validateName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "وارد کردن نام الزامی است";
  if ([...trimmed].length < 2) return "نام باید حداقل ۲ حرف باشد";
  return "";
}

function validateBirthDate({ year, month, day }: JalaliDate): string {
  if (!year || !month || !day) return "روز، ماه و سال تولد را انتخاب کنید";
  if (jalaliToIsoDate(year, month, day) > new Date().toISOString().slice(0, 10))
    return "تاریخ تولد نمی‌تواند در آینده باشد";
  return "";
}

export default VerifyPage;
