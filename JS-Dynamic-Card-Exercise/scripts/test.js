
function getNotation (num) {
    let conciseNum;
    if (num < 1e3)
        return num.toString();
    else if(1e3 <= num && num < 1e6) {
        conciseNum = (num/1e3).toString();
        return conciseNum.concat("K");
    }
    else if(1e6 <= num && num < 1e9) {
        conciseNum = (num/1e6).toString();
        return conciseNum.concat("M");
    }
    else if(1e9 <= num && num < 1e12) {   
        conciseNum = (num/1e9).toString();
        return conciseNum.concat("B");
    }
    else {
        conciseNum = (num/1e12).toString();
        return conciseNum.concat("T");
    }
}

let myNum1 = 10_000_000_000_000;

console.log(getNotation(myNum1));
