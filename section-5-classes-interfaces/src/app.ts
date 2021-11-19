// type AddFn = (a: number, b: number) => number;
// interfaces are a pattern that describe what an object should look like
// values cannot be set inside interfaces
// methods can be defined but logic is not implemented
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('John');
// user1.name = 'Jane';

user1.greet('Hi there - I am');
console.log(user1);
