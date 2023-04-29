import { ReactNode, HTMLAttributes } from 'react';

type FormItemProps = {
    children: ReactNode,
    label: string,
    htmlFor: string
    className?: string,
} & HTMLAttributes<HTMLDivElement>;

export default function FormItem({ children, label, htmlFor, className, ...props }: FormItemProps) {
    return (
        <div 
            className={`form-item ${className ? className : ""}`}
            { ...props }
        >
            <label htmlFor={htmlFor}>{ label }</label>
            { children }
        </div>
    )
}