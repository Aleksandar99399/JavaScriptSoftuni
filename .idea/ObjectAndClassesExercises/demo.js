// class Person {
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//         this._ssn=undefined;//долна черта е за private
//     }
//
//     get hello(){
//         return `${this.name} is ${this.age} years old says hi!`;
//     }
//     get SSN(){
//         return this._ssn;
//     }
//
//     set SSN(value) {
//         if (value > 100) {
//             this._ssn = value;
//         }else {
//             throw new Error('Value must be more from value')
//         }
//     }
//
//     sayHello(){
//         console.log(`${this.name} is ${this.age} years old says hi!`)
//     }
// };
//
// const myPerson=new Person("Ivan",29);
//
// console.log(myPerson.hello);
// //myPerson.sayHello();
// myPerson.name='George';
// myPerson.SSN= 123231;
// console.log(myPerson.SSN);
// console.log(myPerson.hello)

const database = [
    {
        id:1234,
        prop: 'string'
    },
    {
        id:32,
        prop: 'string'
    },
    {
        id:12,
        prop: 'string'
    },

];
const catalog = {
    1234: {
        id:1234,
        prop: 'string'
    },
    32: {
        id:32,
        prop: 'ds'
    },
    12: {
        id:12,
        prop: 'string'
    }
}
console.log(catalog['32'])