function longestCommonPrefix(strs: string[]): string {
	let holder = '';

	if (strs.length == 1) {
		return strs[0];
	}

	// Arrange the array from longest to shortest
	strs = strs.sort((a, b) => b.length - a.length);

	// Use the first word as the reference
	let referenceWord = strs[0].split('');

	// Loop through the strings
	let letterCount = 0;
	let keepLooping = true;
	while (keepLooping) {
		for (let x = 1; x < strs.length; x++) {
			let currentWord = strs[x].split('');

			// If you've reached the end of the reference word
			// Which should be the longest word in the array
			if (!referenceWord[letterCount]) {
				keepLooping = false;
				break;
			}

			if (referenceWord[letterCount] != currentWord[letterCount]) {
				keepLooping = false;
				break;
			}
		}

		if (!keepLooping) {
			break;
		}

		holder = holder.concat(referenceWord[letterCount]);

		// Move to the next letter
		letterCount++;
	}

	return holder;
}

// const strs = ['dog', 'racecar', 'car'];
// const strs = ['reflower', 'flow', 'flight'];
// const strs = ['flower', 'flow', 'flight'];
const strs = ['cir', 'car'];
console.log(longestCommonPrefix(strs));
