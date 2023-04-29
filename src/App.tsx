import "./scss/App.scss";
import { ACTIONS, MIN_LENGTH, MAX_LENGTH, usePassword } from "./context/PasswordContext";
import NumberInput from "./components/NumberInput";
import Checkbox from "./components/Checkbox";
import GenerateButton from "./components/GenerateButton";
import CopyButton from "./components/CopyButton";

function App() {
	const { state, dispatch } = usePassword();
	const { password, passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = state;

	return (
		<main>
			<aside className="side-bar">
				<form onSubmit={event => event.preventDefault()}>
					<ul>
						<li className="length-input-item">
							<div className="form-input-item">
								<label htmlFor="lengthInput">Length</label>
								<NumberInput
									min={MIN_LENGTH}
									max={MAX_LENGTH}
									id="lengthInput"
									value={passwordLength}
									onChange={event => {
										dispatch({ 
											type: ACTIONS.UPDATE_PASSWORD_LENGTH, 
											payload: (event.target as HTMLInputElement).valueAsNumber 
										});
									}}
								/>
							</div>
						</li>
						<li>
							<div className="form-checkbox-item">
								<label htmlFor="uppercaseCheckbox">Include Uppercase</label>
								<Checkbox
									id="uppercaseCheckbox"
									checked={includeUppercase}
									onChange={event => {
										dispatch({ 
											type: ACTIONS.UPDATE_INCLUDE_UPPERCASE, 
											payload: (event.target as HTMLInputElement).checked 
										});
									}}
								/>
							</div>
						</li>
						<li>
							<div className="form-checkbox-item">
								<label htmlFor="lowercaseCheckbox">Include Lowercase</label>
								<Checkbox
									id="lowercaseCheckbox"
									checked={includeLowercase}
									onChange={event => {
										dispatch({ 
											type: ACTIONS.UPDATE_INCLUDE_LOWERCASE, 
											payload: (event.target as HTMLInputElement).checked 
										});
									}}
								/>
							</div>
						</li>
						<li>
							<div className="form-checkbox-item">
								<label htmlFor="numbersCheckbox">Include Numbers</label>
								<Checkbox
									id="numbersCheckbox"
									checked={includeNumbers}
									onChange={event => {
										dispatch({ 
											type: ACTIONS.UPDATE_INCLUDE_NUMBERS,
											payload: (event.target as HTMLInputElement).checked 
										});
									}}
								/>
							</div>
						</li>
						<li>
							<div className="form-checkbox-item">
								<label htmlFor="symbolsCheckbox">Include Symbols</label>
								<Checkbox
									id="symbolsCheckbox"
									checked={includeSymbols}
									onChange={event => {
										dispatch({ 
											type: ACTIONS.UPDATE_INCLUDE_SYMBOLS, 
											payload: (event.target as HTMLInputElement).checked 
										});
									}}
								/>
							</div>
						</li>
					</ul>

					<GenerateButton/>
				</form>
			</aside>

			<div className="main">
				<div className="password-container">
					<div className="password">{ password }</div>
					{/* <div 
						className="strength-meter"
						aria-label="strong password"
					/> */}
				</div>

				<CopyButton/>
			</div>
		</main>
	)
}

export default App;