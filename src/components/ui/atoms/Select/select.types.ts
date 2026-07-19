type Option = {
    value: string;
    label: string;
};
type CSelectProps = {
    options: Option[];
    defaultValue?: Option;
    value?: Option | null;
    isSearchable?: boolean;
    isClearable?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    isRtl?: boolean;
    placeholder?: string;
    isMulti?: boolean;
    name: string;
    onChange?: (option: Option | null) => void;
    error?: boolean;
};

export default CSelectProps;
