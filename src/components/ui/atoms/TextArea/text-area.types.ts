import { TextareaHTMLAttributes } from 'react';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    error?: boolean;
}

export default ITextAreaProps;
