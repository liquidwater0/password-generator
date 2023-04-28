export function getUppercaseLetters() {
	let uppercaseLetters: string[] = [];

	for (let i = 65; i <= 90; i++) {
		const letter = String.fromCharCode(i);
		uppercaseLetters.push(letter);
	}

	return uppercaseLetters;
}

export function getLowercaseLetters() {
	let lowercaseLetters: string[] = [];

	for (let i = 97; i <= 122; i++) {
		const letter = String.fromCharCode(i);
		lowercaseLetters.push(letter);
	}

	return lowercaseLetters;
}

export function getNumbers() {
	let numbers: string[] = [];

	for (let i = 48; i <= 57; i++) {
		const letter = String.fromCharCode(i);
		numbers.push(letter);
	}

	return numbers;
}

export function getSymbols() {
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