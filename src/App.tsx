import { useState, useEffect } from 'react';
import "./scss/App.scss";
import { Autorenew, ContentCopy } from '@mui/icons-material';

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

function App() {
	const [password, setPassword] = useState<string>("");
	const [passwordLength, setPasswordLength] = useState<number>(10);
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
		<div className="App">
			<aside className="side-bar">
				<form onSubmit={event => event.preventDefault()}>
					<ul>
						<li>
							<div className="form-input-item">
								<label htmlFor="lengthInput">Length</label>
								<input 
									className='number-input'
									type="number"
									value={passwordLength}
									onChange={event => setPasswordLength(event.target.valueAsNumber)}
								/>
							</div>
						</li>
						<li>
							<div className="form-checkbox-item">
								<label htmlFor="uppercaseCheckbox">Include Uppercase</label>
								<input 
									className='checkbox'
									type="checkbox" 
									checked={includeUppercase}
									onChange={event => setIncludeUppercase(event.target.checked)}
								/>
							</div>
						</li>
						<li>
							<div className="form-checkbox-item">
								<label htmlFor="uppercaseCheckbox">Include Lowercase</label>
								<input 
									className='checkbox'
									type="checkbox"
									checked={includeLowercase}
									onChange={event => setIncludeLowercase(event.target.checked)}
								/>
							</div>
						</li>
						<li>
							<div className="form-checkbox-item">
								<label htmlFor="uppercaseCheckbox">Include Numbers</label>
								<input 
									className='checkbox'
									type="checkbox"
									checked={includeNumbers}
									onChange={event => setIncludeNumbers(event.target.checked)}
								/>
							</div>
						</li>
						<li>
							<div className="form-checkbox-item">
								<label htmlFor="uppercaseCheckbox">Include Symbols</label>
								<input 
									className='checkbox'
									type="checkbox"
									checked={includeSymbols}
									onChange={event => setIncludeSymbols(event.target.checked)}
								/>
							</div>
						</li>
					</ul>

					<button 
						className="generate-button" 
						type='button'
						onClick={generatePassword}
					>
						<Autorenew/>
					</button>
				</form>
			</aside>

			<div className="main">
				<div className="password-container">
					<div className="password">{ password }</div>
					<div className="strength-meter"/>
				</div>
				<button 
					className="copy-button"
					onClick={copyPassword}
				>
					<ContentCopy/>
				</button>
			</div>
		</div>
	)
}

export default App;