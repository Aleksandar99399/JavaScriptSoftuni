//OBJECT
let person = {

    firstName: "John",

    lastName: "Doe",

    age: 50

};


//когато на у присвояваме обекта х и правим промени
//върху у се променя и главни х обект
let x = {name: 'John',
        street: 'taka e'};

let y = x;

y.street = "John";

console.log(x.street); // John


//Simple dot-notation
let nehsto = {};

nehsto.name = "Peter"; // { name: 'Peter' }

console.log(nehsto.name); // Peter

//Bracket-notation
nehsto['age'] = 21; // { name: 'Peter', age: 21 }

let nehstoAge = nehsto['age'];

console.log(nehstoAge); // 21

//Unassigned properties of an object are undefined
console.log(nehsto.lastName); // undefined


//OBJECT METHODS
let taka = {

    firstName: "John",

    lastName: "Doe",

    fullName: function () {

        return this.firstName + " " + this.lastName;

    }

};

console.log(person.fullName()); // John Doe


//THIS
const person = {

    firstName: 'John',

    lastName: 'Doe',

    returnThis: function(){

        return this;

    }

}

console.log(person.returnThis());

//{ firstName: 'John', lastName: 'Doe', returnThis: [Function: returnThis] }


//OBJECTS IN JS
let person = {

    name: {

        first: 'John',

        last: 'Doe'

    },

    fullName: function () {

        return this.name.first + " " + this.name.last;

    },

};
person.age = 21;
/*Object {name: {first: 'John',last: 'Doe'},
fullName: [Function: fullName],
age: 21}*/

person['gender'] = 'male';

/*Object {name: {first: 'John',last: 'Doe'},
fullName: [Function: fullName],
age: 21,
gender: 'male'}*/

delete person.gender;

/*Object {name: {first: 'John',last: 'Doe'},
fullName: [Function: fullName],
age: 21}*/


//COMPARING OBJECTS
let fruit = {name: 'apple'};

let fruitbear = {name: 'apple'};

fruit == fruitbear; // return false

fruit === fruitbear; // return false

let fruit = { name: 'apple' };

let fruitbear = fruit;

// Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object

fruit == fruitbear; // return true

fruit === fruitbear; // return true


//KEYS AND VALUES
let course = { name: 'JS Core', hall: 'Open Source' };

let keys = Object.keys(course);

console.log(keys); // [ 'name', 'hall' ]

if (course.hasOwnProperty('name')) {

    console.log(course.name); // JS Core

}


let values = Object.values(course);

console.log(values); // [ 'JS Core', 'Open Source' ]

if (values.includes('JS Core')) {

    console.log("Found 'JS Core' value");

}


//FOR... IN LOOP
let obj = {a: 1, b: 2, c: 3};

for (const key in obj) {

    console.log(`obj.${key} = ${obj[key]}`);

}

// Output:

// "obj.a = 1"

// "obj.b = 2"

// "obj.c = 3"


//FOR... OF LOOP
let obj = {a: 1, b: 2, c: 3};

for (const key of Object.keys(obj)) {

    console.log(`obj.${key} = ${obj[key]}`);

}

// "obj.a = 1"

// "obj.b = 2"

// "obj.c = 3"

for (const val of Object.values(obj)) {console.log(val);}

// 1

// 2

// 3


//OBJECT NON-ENUMERABLE PROPERTIES
let ob = {a:1, b:2};

ob.c = 3;

Object.defineProperty(ob, 'd', { value: 4, enumerable: false });

ob.d; // => 4

for( let key in ob ) console.log( ob[key] ); //1 2 3

Object.keys( ob ); // => ["a", "b", "c"]

ob; // => {a: 1, b: 2, c: 3, d: 4}

ob.d; // => 4


//OBJECT NON-WRITABLE PROPERTIES
let ob = { a: 1 };

Object.defineProperty(ob, 'B', { value: 2, writable: false });

ob.B; // => 2

ob.B = 10;

ob.B; // => 2


//Object's Non-configurable Properties
let ob = {};

Object.defineProperty(ob, 'a', { configurable: false, writable: true });

Object.defineProperty(ob, 'a', { enumerable: true }); // throws a TypeError

Object.defineProperty(ob, 'a', { value: 12 }); // throws a TypeError

Object.defineProperty(ob, 'a', { writable: false }); // This is allowed!!

Object.defineProperty(ob, 'a', { writable: true }); // throws a TypeError

delete ob.a; // => false


//OBJECT FREEZE AND SEAL
let cat = { name: 'Tom', age: 5 };

Object.freeze(cat);

cat.age = 10; // Error in strict mode

cat.gender = 'male'; // Error in strict mode

console.log(cat); // { name: 'Tom', age: 5 }


cat = { name: 'Tom', age: 5 };

Object.seal(cat);

cat.age = 10; // OK

delete cat.age; // Error in strict mode

console.log(cat);


//PARSING TO JSON
let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }';

let obj = JSON.parse(data);

console.log(obj.manager.lastName) // Doe


//CONVERTING JSON AND JS
let obj = { name: "John", age: 30, city: "New York" };

let myJSON = JSON.stringify(obj);

console.log(myJSON);// {"name":"John","age":30,"city":"New York"}

let arr = [ "John", "Peter", "Sally", "Jane" ];

let myJSON = JSON.stringify(arr);

console.log(myJSON); // ["John","Peter","Sally","Jane"]


//DEFINING CLASS
class Rectangle {

    constructor(height, width) {

        this.height = height;

        this.width = width;

    }

};

let Rectangle = class Rectangle2 {

    constructor(height, width) {

        this.height = height;

        this.width = width;

    }

};


//HOISTING
const p = new Rectangle(); // ReferenceError

class Rectangle {}


//PROTOTYPE METHODS
class Rectangle {

    constructor(height, width) {

        this.height = height;

        this.width = width;

    }

// Method

    calcArea() { return this.height * this.width; }

}

const square = new Rectangle(10, 10);

console.log(square.calcArea()); // 100


//CLASS PROPERTIES
class Circle {

    constructor(radius) { this.radius = radius; }

    get diameter() { return 2 * this.radius; }

    set diameter(diameter) {

        this.radius = diameter / 2;

    }

    get area() {

        return Math.PI * this.radius * this.radius;

    }

}


//ACCESSOR PROPERTIES IN ACTION
let c = new Circle(2);

console.log(`Radius: ${c.radius}`); // 2

console.log(`Diameter: ${c.diameter}`); // 4

console.log(`Area: ${c.area}`); // 12.566370614359172

c.diameter = 1.6;

console.log(`Radius: ${c.radius}`); // 0.8

console.log(`Diameter: ${c.diameter}`); // 1.6

console.log(`Area: ${c.area}`); // 2.0106192982974678


//STATIC METHODS
// static staticMethod() { return 'Static method has been called'}
//
// static anotherStaticMethod() {
//
//     return this.staticMethod() + ' from another method';
//
// }


//PRIVATE PROPETIES
class PrivateField {

    #private;

    constructor() {

        //this.#private = 42

        this.#randomField = 666 // Syntax error

    }

}

const instance = new PrivateField()

instance.#private === 42 // Syntax error


//ACCESSING PRIVATE PROPERTIES
class PrivateField {

    #private;

    // constructor() { this.#private = 42 }
    //
    // get private() { return this.#private }

}

const instance = new PrivateField()

console.log(instance.private); //42