import { 
    useState, 
    useEffect, 
	useReducer,
    useContext, 
    createContext, 
    ReactNode, 
    Dispatch,
	Reducer
} from "react";
import { getUppercaseLetters, getLowercaseLetters, getNumbers, getSymbols } from "../utitities";

type State = {
	password: string,
	passwordLength: number,
	includeUppercase: boolean,
	includeLowercase: boolean,
	includeNumbers: boolean,
	includeSymbols: boolean
}
type ReducerAction = { type: string, payload: any }
type ReducerType = Reducer<State, ReducerAction>
type PasswordContextType = {
    state: State,
	dispatch: Dispatch<ReducerAction>,
    generatePassword: () => void,
    copyPassword: () => void
}

const PasswordContext = createContext<PasswordContextType>(null!);

export function usePassword() {
    return useContext(PasswordContext);
}

export const MIN_LENGTH = 5;
export const MAX_LENGTH = 50;
export const ACTIONS = {
	UPDATE_PASSWORD: "updatePassword",
	UPDATE_PASSWORD_LENGTH: "updatePasswordLength",
	UPDATE_INCLUDE_UPPERCASE: "updateIncludeUppercase",
	UPDATE_INCLUDE_LOWERCASE: "updateIncludeLowercase",
	UPDATE_INCLUDE_NUMBERS: "updateIncludeNumbers",
	UPDATE_INCLUDE_SYMBOLS: "updateIncludeSymbols"
} as const;

const initialState: State = {
	password: "",
	passwordLength: MIN_LENGTH,
	includeUppercase: true,
	includeLowercase: true,
	includeNumbers: true,
	includeSymbols: true
}

function reducer(state: State, action: ReducerAction) {
	switch(action.type) {
		case ACTIONS.UPDATE_PASSWORD:
			return { ...state, password: action.payload };
		case ACTIONS.UPDATE_PASSWORD_LENGTH:
			return { ...state, passwordLength: action.payload };
		case ACTIONS.UPDATE_INCLUDE_UPPERCASE:
			return { ...state, includeUppercase: action.payload };
		case ACTIONS.UPDATE_INCLUDE_LOWERCASE:
			return { ...state, includeLowercase: action.payload };
		case ACTIONS.UPDATE_INCLUDE_NUMBERS:
			return { ...state, includeNumbers: action.payload };
		case ACTIONS.UPDATE_INCLUDE_SYMBOLS:
			return { ...state, includeSymbols: action.payload };
		default:
			return state;
	}
}

export default function PasswordProvider({ children }: { children: ReactNode }) {
	const [ state, dispatch] = useReducer<ReducerType>(reducer, initialState);
	const { password, passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = state;
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

		dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: randomPassword });
	}

	function copyPassword() {
		navigator.clipboard.writeText(password);
	}

    return (
        <PasswordContext.Provider value={{ state, dispatch, generatePassword, copyPassword}}>
            { children }
        </PasswordContext.Provider>
    );
}