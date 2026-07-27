import { create } from 'zustand';

type Step1Data = {
    name: string;
    email: string;
};

type Step2Data = {
    age: number;
    country: string;
};

type FormData = {
    step1?: Step1Data;
    step2?: Step2Data;
};

type StepKey = keyof FormData;
type StepDataMap = {
    step1: Step1Data;
    step2: Step2Data;
};

type FormStore = {
    data: FormData;
    setStepData: <K extends StepKey>(step: K, values: StepDataMap[K]) => void;
    getStepData: <K extends StepKey>(step: K) => StepDataMap[K] | undefined;
    reset: () => void;
};

export const useFormStore = create<FormStore>((set, get) => ({
    data: {},
    setStepData: (step, values) =>
        set((state) => ({
            data: {
                ...state.data,
                [step]: {
                    ...state.data[step],
                    ...values
                }
            }
        })),
    getStepData: (step) => get().data[step] as StepDataMap[typeof step] | undefined,
    reset: () => set({ data: {} })
}));
