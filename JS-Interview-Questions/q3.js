let myStr = "aBcDeFgHiJkLmNoP";

/* strings are immutable, hence we need to create an array to reverse the string */
let arrStrReversed = [];

for(let i = (myStr.length - 1); i >= 0; i--) {
  // console.log(myStr.concat(myStr[i]));
  // console.log(myStr[i])
  arrStrReversed.push(myStr[i])
}

console.log()

let strReversed = myStr.concat(arrStrReversed.join(''));

console.log(strReversed) // aBcDeFgHiJkLmNoPPoNmLkJiHgFeDcBa