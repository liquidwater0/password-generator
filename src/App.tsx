import "./scss/App.scss";
import { usePassword } from "./context/PasswordContext";
import { Autorenew, ContentCopy } from '@mui/icons-material';

export const MIN_LENGTH = 5;
export const MAX_LENGTH = 50;

function App() {
	const { 
		password, 
		passwordLength, 
		includeUppercase, 
		includeLowercase, 
		includeNumbers, 
		includeSymbols,
		setPasswordLength,
		setIncludeUppercase,
		setIncludeLowercase,
		setIncludeNumbers,
		setIncludeSymbols,
		generatePassword,
		copyPassword
	} = usePassword();

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
									min={MIN_LENGTH}
									max={MAX_LENGTH}
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