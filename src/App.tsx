import "./scss/App.scss";
import { ACTIONS, MIN_LENGTH, MAX_LENGTH, usePassword } from "./context/PasswordContext";
import NumberInput from "./components/NumberInput";
import Checkbox from "./components/Checkbox";
import GenerateButton from "./components/GenerateButton";
import PasswordBox from "./components/PasswordBox";

function App() {
	const { state, dispatch } = usePassword();
	const { passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = state;

	return (
		<main>
			<aside className="side-bar">
				<form onSubmit={event => event.preventDefault()}>
					<ul>
						<li className="length-input-item">
							<div className="form-input-item">
								<label htmlFor="lengthInput">Length</label>
								<NumberInput
									id="lengthInput"
									min={MIN_LENGTH}
									max={MAX_LENGTH}
									defaultValue={passwordLength}
									onChange={event => {
										const input = (event.target as HTMLInputElement);
										const valueAsNumber = input.valueAsNumber;
										const valueAsString = input.value;
										let length: number;

										if (valueAsString.includes(".")) {
											input.valueAsNumber = Math.floor(valueAsNumber);
										}

										// if (valueAsNumber < MIN_LENGTH || isNaN(valueAsNumber)) {
										// 	length = MIN_LENGTH;
										// } else if (valueAsNumber > MAX_LENGTH) {
										// 	length = MAX_LENGTH;
										// } else {
										// 	length = valueAsNumber;
										// }										

										dispatch({ 
											type: ACTIONS.UPDATE_PASSWORD_LENGTH, 
											payload: Math.floor(valueAsNumber)
											// payload: Math.floor(length)
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
									defaultChecked={includeUppercase}
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
									defaultChecked={includeLowercase}
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
									defaultChecked={includeNumbers}
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
									defaultChecked={includeSymbols}
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
					<PasswordBox/>
					{/* <div 
						className="strength-meter"
						aria-label="strong password"
					/> */}
				</div>
			</div>
		</main>
	)
}

export default App;