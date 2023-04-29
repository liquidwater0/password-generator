import { useRef, HTMLAttributes, ChangeEvent } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

type NumberInputProps = {
    min?: number,
    max?: number,
    value?: number,
    defaultValue?: number,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
} & HTMLAttributes<HTMLInputElement>;

export default function NumberInput({ min, max, value, defaultValue, onChange, ...props }: NumberInputProps) {
    const inputRef = useRef<HTMLInputElement>(null!);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        if (onChange) onChange(event);
    }

    function increment() {
        inputRef.current.stepUp();
        inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function decrement() {
        inputRef.current.stepDown();
        inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
    }

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
                defaultValue={defaultValue}
                onChange={handleChange}
                ref={inputRef}
                { ...props }
            />

            <div className="arrow-buttons">
                <button 
                    className='increase-button'
                    onClick={increment}
                >
                    { <ChevronLeft/> }
                </button>
                <button 
                    className='decrease-button'
                    onClick={decrement}
                >
                    { <ChevronRight/> }
                </button>
            </div>
        </div>
    );
}