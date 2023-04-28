import "./scss/App.scss";
import { ACTIONS, MIN_LENGTH, MAX_LENGTH, usePassword } from "./context/PasswordContext";
import { Autorenew, ContentCopy } from '@mui/icons-material';

function App() {
	const { state, dispatch, generatePassword, copyPassword } = usePassword();
	const { password, passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = state;

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
									onChange={event => dispatch({ type: ACTIONS.UPDATE_PASSWORD_LENGTH, payload: event.target.valueAsNumber })}
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
									onChange={event => dispatch({ type: ACTIONS.UPDATE_INCLUDE_UPPERCASE, payload: event.target.checked })}
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
									onChange={event => dispatch({ type: ACTIONS.UPDATE_INCLUDE_LOWERCASE, payload: event.target.checked })}
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
									onChange={event => dispatch({ type: ACTIONS.UPDATE_INCLUDE_NUMBERS, payload: event.target.checked })}
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
									onChange={event => dispatch({ type: ACTIONS.UPDATE_INCLUDE_SYMBOLS, payload: event.target.checked })}
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