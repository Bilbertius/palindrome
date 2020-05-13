const palindromeCheck = str => {
	let chars = str.toLowerCase().replace(/\W/g, '');
	let revChars = chars.split('').reverse().join('');
	return chars === revChars;
}

