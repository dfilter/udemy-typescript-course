// Types of object values can be manually set by doing the following:
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'John',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// Enum values are defined as below. The values can be set by using "=". By default they will be numbers 0 to infinity.
enum Role { ADMIN, READ_ONLY, AUTHOR }

// The types of object values are inferred by the data provided.
const person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
}

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

// Array types of any are the default type of array in JS. Pointless if you use TS.
let favouriteActivities: any[];
favouriteActivities = ['Sports'];

console.log(person.name);

// One of the advantages of using typescript is that since the hobby key is guaranteed to be only strings
// one can safely call toUpperCase without errors occurring (if there's an integer or whatever).
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.role);