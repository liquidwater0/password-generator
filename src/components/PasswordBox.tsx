import { useState } from 'react';
import { usePassword } from '../context/PasswordContext';

export default function CopyButton() {
    const { state, copyPassword } = usePassword();
    const [isClicked, setIsClicked] = useState<boolean>(false);

    function handleClick() {
        setIsClicked(true);
        copyPassword();
    }

    return (
        <button 
            className={`password ${isClicked ? "animating" : ""}`}
            type='button'
            title="Copy Password"
            aria-label="copy password button"
            onClick={handleClick}
            onAnimationEnd={() => setIsClicked(false)}
        >
            { state.password }
        </button>
    );
}