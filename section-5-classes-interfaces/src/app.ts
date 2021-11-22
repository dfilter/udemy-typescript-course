// type AddFn = (a: number, b: number) => number;
// interfaces are a pattern that describe what an object should look like
// values cannot be set inside interfaces
// methods can be defined but logic is not implemented

// below is an example of how to use an interface with an anonymous function
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  outputName?: string, // "?" denotes an optional property
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// because this class implements Greetable it is required to have a greet method.
// since it Greetable extends Named it also is required to have a "name" property.
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
