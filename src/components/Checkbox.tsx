import { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { Check } from '@mui/icons-material';

type CheckboxProps = {
    id: string
} & HTMLAttributes<HTMLInputElement>;

export default function Checkbox({ id, ...props }: CheckboxProps) {
    const [checked, setChecked] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        setChecked(inputRef.current.checked);
    }, []);

    function handleCheckboxClick() {
        inputRef.current.click();
        setChecked(inputRef.current.checked);
    }

    return (
        <div>
            <button 
                className={`checkbox ${checked ? "checked" : ""}`}
                onClick={handleCheckboxClick}
                aria-label='checkbox'
                aria-checked={checked}
                aria-controls={id}
            >
                <div className="check">
                    <Check/>
                </div>
            </button>

            <input 
                type="checkbox" 
                style={{ display: "none" }}
                ref={inputRef}
                aria-hidden="true"
                id={id}
                { ...props }
            />
        </div>
    );
}