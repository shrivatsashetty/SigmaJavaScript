let myStr = "abcd";

function crearteMirrorStr(orignalStr) {
	/* strings are immutable, hence we need to create an array to reverse the string */
	let arrStrReversed = [];
	
	for(let i = (orignalStr.length - 1); i >= 0; i--) {
	  arrStrReversed.push(orignalStr[i])
	}

	return orignalStr.concat(arrStrReversed.join(''));
}

console.log(crearteMirrorStr(myStr)); // abcddcba
