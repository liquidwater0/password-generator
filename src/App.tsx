import { useState } from 'react';
import "./scss/App.scss";
import { Autorenew, ContentCopy } from '@mui/icons-material';

function App() {
	const [passwordLength, setPasswordLength] = useState<number>(10);
	const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
	const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
	const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
	const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

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
						onClick={() => 4}
					>
						<Autorenew/>
					</button>
				</form>
			</aside>

			<div className="main">
				<div className="password-container">
					<div className="password">Password</div>
					<div className="strength-meter"/>
				</div>
				<button className="copy-button">
					<ContentCopy/>
				</button>
			</div>
		</div>
	)
}

export default App;