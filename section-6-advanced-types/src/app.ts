type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// here one can define a type that is the combination of two types.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'John',
    privileges: ['create-server'],
    startDate: new Date()
}

// Type intersection:
type Combinable = string | number;
type Numeric = number | boolean;

// the only types that intersect are "number" therefor the only applicable type to Universal will be number
type Universal = Combinable & Numeric;


// Type guarding:
// Function overloads:

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
    // this is an example of a type guard:
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('John', 'Doe') as string;

type UnknownEmployee = Employee | Admin;

// Optional chaining:

const fetchedUserData = {
    id: 'u1',
    name: 'John',
    // job: {
    //     title: 'CEO',
    //     description: 'My own company'
    // }
}
console.log(fetchedUserData?.job?.title);

// Nullish Coalescing:

const userInput = null;
// null coalesce if userInput is null then assign "DEFAULT"
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ', emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Privileges: ', emp.startDate);
    }
}

printEmployeeInformation({name: 'Jane', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo... ', amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // here we type guard in order to only run the loadCargo method if the passed object is an instance of Truck
    // note that instanceof can only be used with classes, interfaces have no constructor so they won't have access to this.
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);


// Discriminated Unions
// in order to discriminate between the interfaces we add a common property that describes it.
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ', speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}


// Index properties:

interface ErrorContainer {
    [prop: string]: string  // dynamic property name and count
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
}
