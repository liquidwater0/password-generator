import { 
    useState, 
    useEffect, 
    useContext, 
    createContext, 
    ReactNode, 
    Dispatch, 
    SetStateAction 
} from "react";
import { MIN_LENGTH } from "../App";

type PasswordContextType = {
    password: string,
    passwordLength: number,
    includeUppercase: boolean,
    includeLowercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean,
    generatePassword: () => void,
    copyPassword: () => void,
    setPasswordLength: Dispatch<SetStateAction<number>>,
    setIncludeUppercase: Dispatch<SetStateAction<boolean>>,
    setIncludeLowercase: Dispatch<SetStateAction<boolean>>,
    setIncludeNumbers: Dispatch<SetStateAction<boolean>>,
    setIncludeSymbols: Dispatch<SetStateAction<boolean>>
}

const PasswordContext = createContext<PasswordContextType>(null!);

export function usePassword() {
    return useContext(PasswordContext);
}

function getUppercaseLetters() {
	let uppercaseLetters: string[] = [];

	for (let i = 65; i <= 90; i++) {
		const letter = String.fromCharCode(i);
		uppercaseLetters.push(letter);
	}

	return uppercaseLetters;
}

function getLowercaseLetters() {
	let lowercaseLetters: string[] = [];

	for (let i = 97; i <= 122; i++) {
		const letter = String.fromCharCode(i);
		lowercaseLetters.push(letter);
	}

	return lowercaseLetters;
}

function getNumbers() {
	let numbers: string[] = [];

	for (let i = 48; i <= 57; i++) {
		const letter = String.fromCharCode(i);
		numbers.push(letter);
	}

	return numbers;
}

function getSymbols() {
	let symbols: string[] = [];

	for (let i = 33; i <= 47; i++) {
		const letter = String.fromCharCode(i);
		symbols.push(letter);
	}

	for (let i = 58; i <= 64; i++) {
		const letter = String.fromCharCode(i);
		symbols.push(letter);
	}

	for (let i = 91; i <= 96; i++) {
		const letter = String.fromCharCode(i);
		symbols.push(letter);
	}

	for (let i = 123; i <= 126; i++) {
		const letter = String.fromCharCode(i);
		symbols.push(letter);
	}

	return symbols;
}

export default function PasswordProvider({ children }: { children: ReactNode }) {
    const [password, setPassword] = useState<string>("");
	const [passwordLength, setPasswordLength] = useState<number>(MIN_LENGTH);
	const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
	const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
	const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
	const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
	const [digitArray, setDigitArray] = useState<string[]>([]);

    useEffect(() => {
		setDigitArray([]);
		
		if (includeUppercase) setDigitArray(prev => [...prev, ...getUppercaseLetters()]);
		if (includeLowercase) setDigitArray(prev => [...prev, ...getLowercaseLetters()]);
		if (includeNumbers) setDigitArray(prev => [...prev, ...getNumbers()]);
		if (includeSymbols) setDigitArray(prev => [...prev, ...getSymbols()]);
	}, [includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

    function generatePassword() {
		const randomPassword = new Array(passwordLength)
			.fill("")
			.map(() => digitArray[Math.floor(Math.random() * digitArray.length)])
			.join("");

		setPassword(randomPassword);
	}

	function copyPassword() {
		navigator.clipboard.writeText(password);
	}

    return (
        <PasswordContext.Provider value={{ 
            password,
            passwordLength,
            includeUppercase,
            includeLowercase,
            includeNumbers,
            includeSymbols,
            generatePassword, 
            copyPassword, 
            setPasswordLength, 
            setIncludeUppercase, 
            setIncludeLowercase,
            setIncludeNumbers,
            setIncludeSymbols
        }}>
            { children }
        </PasswordContext.Provider>
    );
}