import { useState, useEffect, useRef, HTMLAttributes, ChangeEvent, FormEventHandler } from 'react';
import { Check } from '@mui/icons-material';

type CheckboxProps = {
    id?: string,
    checked?: boolean,
    onChange?: FormEventHandler<HTMLInputElement>
} & HTMLAttributes<HTMLInputElement>;

export default function Checkbox({ id, checked, onChange, ...props }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        setIsChecked(inputRef.current.checked);
    }, []);

    function handleCheckboxClick() {
        inputRef.current.click();
        setIsChecked(inputRef.current.checked);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        if (onChange) onChange(event);
        setIsChecked(event.target.checked);
    }

    return (
        <div>
            <button 
                className={`checkbox ${isChecked ? "checked" : ""}`}
                onClick={handleCheckboxClick}
                type='button'
                aria-label='checkbox'
                aria-checked={isChecked}
                aria-controls={id}
            >
                <div className="check">
                    <Check/>
                </div>
            </button>

            <input 
                type="checkbox" 
                style={{ display: "none" }}
                aria-hidden="true"
                id={id}
                checked={checked}
                onChange={handleInputChange}
                ref={inputRef}
                { ...props }
            />
        </div>
    );
}