// Although typescript infers that the return type will be of type number
// one can also declare it like so:
function add(n1: number, n2: number): number {
    return n1 + n2;
}

// if the function doesn't return anything void can be specified as the return type
function printResult(num: number): void {
    console.log('Result', num);
}

// If the function has a callback the callbacks arguments and return type can be defined as fallows:
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8,8));

addAndHandle(10, 20, (result) => {
    console.log('From callback:', result);
})
