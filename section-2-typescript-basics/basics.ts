// n1 and n2 are required to be of type number, showResult as boolean and phrase as string
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase, result);
    } else {
        return result;
    }
}


// Typescript infers type by assigning values as follows:
const number1 = 5;  // "number"
const number2 = 2.8;  // "number"
const printResult = true;  // boolean
const printPhrase = 'Result is: ';  // string

// The values must match types required by the function above.
add(number1, number2, printResult, printPhrase);