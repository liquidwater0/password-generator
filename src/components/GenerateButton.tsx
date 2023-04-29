import { useState } from "react";
import { Autorenew } from "@mui/icons-material";
import { usePassword } from "../context/PasswordContext";

export default function GenerateButton() {
    const { generatePassword } = usePassword();
    const [isClicked, setIsClicked] = useState<boolean>(true);

    function handleClick() {
        setIsClicked(true);
        if (isClicked) return;
        generatePassword();
    }

    return (
        <button 
            className={`generate-button ${isClicked ? "spinning" : ""}`} 
            type='button'
            title="Generate Password"
            aria-label="generate password button"
            onClick={handleClick}
            onAnimationEnd={() => setIsClicked(false)}
        >
            <Autorenew/>
        </button>
    );
}