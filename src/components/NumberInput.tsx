import { HTMLAttributes } from 'react';

type NumberInputProps = {
    min?: number,
    max?: number,
    value?: number
} & HTMLAttributes<HTMLInputElement>;

export default function NumberInput({ min, max, value, ...props }: NumberInputProps) {
    return (
        <input 
            className='number-input'
            type="number" 
            min={min}
            max={max}
            value={value}
            { ...props }
        />
    );
}