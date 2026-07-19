interface CheckboxProps {
    id: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    name: string;
    label?: string;
}
export default CheckboxProps;
