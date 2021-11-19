// unknown is safer then any because it won't allow line 7
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'John';
// userName = userInput;  // one can't do this since userInput is of type unknown and userName is of type string.

if (typeof userInput === 'string') {
    // because the type is checked first we know the type will be string so typescript won't complain
    userName = userInput;
}

// The function below never returns anything because of the throw. Therefor the return type is "never".
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An Error Occurred!', 500);
