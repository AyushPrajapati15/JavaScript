// Roman to integer
function romanToInt(s) {
    const romanToIntegerMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanToIntegerMap[s[i]];
        if (currentValue >= prevValue) {
            result += currentValue;
        } else {
            result -= currentValue;
        }
        prevValue = currentValue;
    }

    return result;
}

const romanNumeral = "MCMXCIV"; // Example Roman numeral: 1994
const result = romanToInt(romanNumeral);
console.log(`The integer value of ${romanNumeral} is: ${result}`);
