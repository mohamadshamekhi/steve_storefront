'use client';

import { Dispatch, SetStateAction, useState } from 'react';

export interface UseBoolean {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    onTrue: () => void;
    onFalse: () => void;
    onToggle: () => void;
}

export function useBoolean(defaultValue: boolean = false): UseBoolean {
    const [value, setValue] = useState<boolean>(defaultValue);

    const onTrue: UseBoolean['onTrue'] = () => setValue(true);
    const onFalse: UseBoolean['onFalse'] = () => setValue(false);
    const onToggle: UseBoolean['onToggle'] = () => setValue((prev) => !prev);

    return { value, setValue, onTrue, onFalse, onToggle };
}

