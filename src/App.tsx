import "./scss/App.scss";
import { ACTIONS, MIN_LENGTH, MAX_LENGTH, usePassword } from "./context/PasswordContext";
import NumberInput from "./components/NumberInput";
import Checkbox from "./components/Checkbox";
import GenerateButton from "./components/GenerateButton";
import PasswordBox from "./components/PasswordBox";
import FormItem from "./components/FormItem";

function App() {
	const { state, dispatch } = usePassword();
	const { passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = state;

	return (
		<main>
			<aside className="side-bar">
				<form onSubmit={event => event.preventDefault()}>
					<ul>
						<li className="length-input-item">
							<FormItem 
								label="Length" 
								htmlFor="lengthInput"
								className="form-input-item"
							>
								<NumberInput
									id="lengthInput"
									min={MIN_LENGTH}
									max={MAX_LENGTH}
									defaultValue={passwordLength}
									onKeyDown={event => event.key === "." && event.preventDefault()}
									onChange={event => {
										const input = (event.target as HTMLInputElement);
										const valueAsNumber = input.valueAsNumber;
										let length: number;

										if (valueAsNumber < MIN_LENGTH || isNaN(valueAsNumber)) {
											length = MIN_LENGTH;
										} else if (valueAsNumber > MAX_LENGTH) {
											length = MAX_LENGTH;
										} else {
											length = valueAsNumber;
										}										

										dispatch({ 
											type: ACTIONS.UPDATE_PASSWORD_LENGTH, 
											payload: length
										});
									}}
								/>
							</FormItem>
						</li>
						<li>
							<FormItem 
								label="Include Uppercase" 
								htmlFor="uppercaseCheckbox"
								className="form-checkbox-item"
							>
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
							</FormItem>
						</li>
						<li>
							<FormItem
								label="Include Lowercase"
								htmlFor="lowercaseCheckbox"
								className="form-checkbox-item"
							>
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
							</FormItem>
						</li>
						<li>
							<FormItem
								label="Include Numbers"
								htmlFor="numbersCheckbox"
								className="form-checkbox-item"
							>
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
							</FormItem>
						</li>
						<li>
							<FormItem
								label="Include Symbols"
								htmlFor="symbolsCheckbox"
								className="form-checkbox-item"
							>
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
							</FormItem>
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