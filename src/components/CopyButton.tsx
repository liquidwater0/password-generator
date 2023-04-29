import { useState } from 'react';
import { usePassword } from '../context/PasswordContext';
import { ContentCopy } from '@mui/icons-material';

export default function CopyButton() {
    const { copyPassword } = usePassword();
    const [isClicked, setIsClicked] = useState<boolean>(false);

    function handleClick() {
        setIsClicked(true);
        copyPassword();
    }

    return (
        <button 
            className={`copy-button ${isClicked ? "animating" : ""}`}
            type='button'
            title="Copy Password"
            aria-label="copy password button"
            onClick={handleClick}
            onAnimationEnd={() => setIsClicked(false)}
        >
            <ContentCopy/>
        </button>
    );
}