const names: Array<string> = ['John', 'Jane'];
// names[0].split(' ');

// promise resolves to a number so one can give it that generic type.
const promise: Promise<number> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});

promise.then(data => {
    // since typescript knows that the returned type of the promise will be type number we can do numeric operations on data
    console.log(data++);
    // data.split(' ');
})

// with generic types one can provide objects of different types, here the intersection of object T and U
// with this function structure is not important
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// typescript doesn't care what the structure of the objects is as long as they are objects
const mergedObj = merge({
    name: 'John',
    hobbies: ['Chess']
}, {age: 30});
console.log(mergedObj);

// restrain to objects that have a length prop of type number
interface Lengthy {
    length: number;
}

// generic function where we restrain the passed prop to any object which has a property of "length"
// the application of this is that it will work with arrays and strings but not other types
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got nothin';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + 'elements.';
    }
    return [element, descriptionText];
}

// obj can be any object but key must be a key within that object
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value ' + obj[key];
}
// the object has a key called name so this is valid
console.log(extractAndConvert({name: 'John'}, 'name'));

// The class can be of type boolean string or number and will be locked to that single type
class DataStorage<T extends boolean | string | number> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('John')
textStorage.addItem('Jane')

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: 'John'});
// objectStorage.addItem({name: 'Jane'});
// objectStorage.removeItem({name: 'Jane'}); // this will fail since objects are reference types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    // if we want to add properties to an object structure one at a time we can set the object to be of Partial<CourseGoal>
    // since it won't have all the keys required by that interface yet.
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    // finally, we cast the completed object as CourseGoal which is what we ultimately want.
    return courseGoal as CourseGoal;
}

// Locked array of type string
const moreNames: Readonly<string[]> = ['John', 'Jane'];
// moreNames.push('Josh');  // we cannot push since it's read only
// moreNames.pop();  // we cannot pop for the same reason
