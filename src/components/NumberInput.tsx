import { useRef, HTMLAttributes } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

type NumberInputProps = {
    min?: number,
    max?: number,
    value?: number,
    defaultValue?: number
} & HTMLAttributes<HTMLInputElement>;

export default function NumberInput({ min, max, value, defaultValue, ...props }: NumberInputProps) {
    const inputRef = useRef<HTMLInputElement>(null!);

    return (
        <div 
            className='number-input'
            onClick={() => inputRef.current.click()}
        >
            <input 
                type="number" 
                aria-hidden="true"
                min={min}
                max={max}
                value={value}
                ref={inputRef}
                { ...props }
            />

            <div className="arrow-buttons">
                <button 
                    className='increase-button'
                    onClick={() => inputRef.current.stepUp()}
                >
                    { <ChevronLeft/> }
                </button>
                <button 
                    className='decrease-button'
                    onClick={() => inputRef.current.stepDown()}
                >
                    { <ChevronRight/> }
                </button>
            </div>
        </div>
    );
}