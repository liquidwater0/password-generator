import { HTMLAttributes } from 'react';

type NumberInputProps = {
    min?: number,
    max?: number
} & HTMLAttributes<HTMLInputElement>;

export default function NumberInput({ min, max, ...props }: NumberInputProps) {
    return (
        <input 
            className='number-input'
            type="number" 
            min={min}
            max={max}
            { ...props }
        />
    );
}