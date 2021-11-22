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
