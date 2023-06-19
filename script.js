//your code here
	function convertToRoman(num) {
  if (num <= 0 || num > 100000) {
    return "Number out of range";
  }

  const romanSymbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";

  for (let symbol in romanSymbols) {
    while (num >= romanSymbols[symbol]) {
      romanNumeral += symbol;
      num -= romanSymbols[symbol];
    }
  }

  return romanNumeral;
}


// do not edit below this line
module.exports = convertToRoman