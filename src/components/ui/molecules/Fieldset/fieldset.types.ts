type FieldsetProps = {
    children: React.ReactNode;
    name: string;
    hint?: string;
    label?: React.ReactNode;
    errors: { [key: string]: string | undefined };
    touched: { [key: string]: boolean | undefined };
    className?: string;
    labelClass?: string;
    direction?: string;
};
export default FieldsetProps;
