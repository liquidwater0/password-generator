import { useState } from "react";
import { Autorenew } from "@mui/icons-material";
import { usePassword } from "../context/PasswordContext";

export default function GenerateButton() {
    const { generatePassword } = usePassword();
    const [isClicked, setIsClicked] = useState<boolean>(false);

    function handleClick() {
        setIsClicked(true);
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