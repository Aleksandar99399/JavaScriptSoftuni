
let arrr=[10,20,30,40];
let number=arrr[0];
//console.log(number);


//Arrays Indexation
let arr = [];

arr[3.4] = 'Oranges';

arr[-1] = 'Apples';

console.log(arr.length); // 0

console.log(arr.hasOwnProperty(3.4)); // true

arr[1] = 'Grapes';

console.log(arr.length); // 2

console.log(arr); // [ <1 empty item>, 'Grapes',
//'3.4': 'Oranges', '-1': 'Apples' ]


//Accessing Elements
let cars = ['BMW', 'Audi', 'Opel'];

let firstCar = cars[0]; // BMW

let lastCar = cars[arr.length - 1]; // Opel

console.log(cars[3]); // undefined

console.log(cars[-1]); // undefined


//Destructuring assignment
let numbers = [10, 20, 30, 40, 50];

let [a, b, ...rest] = numbers;

console.log(a) // 10

console.log(b) // 20

console.log(rest) // [30, 40, 50]


//POP
let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(nums.length); // 7

console.log(nums.pop()); // 70

console.log(nums.length); // 6

console.log(nums); // [ 10, 20, 30, 40, 50, 60 ]


//PUSH
let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(nums.length); // 7

console.log(nums.push(80)); // 8 (nums.length)

console.log(nums); // [ 10, 20, 30, 40, 50, 60, 70, 80 ]


//SHIFT
let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(nums.length); // 7

console.log(nums.shift()); // 10 (removed element)

console.log(nums); // [ 20, 30, 40, 50, 60, 70, 80 ]


//UNSHIFT
let nums = [40, 50, 60];

console.log(nums.length); // 3

console.log(nums.unshift(30)); // 4 (nums.length)

console.log(nums.unshift(10,20)); // 6 (nums.lenghth)

console.log(nums); // [ 10, 20, 30, 40, 50, 60 ]


//SPLICE
let nums = [1, 3, 4, 5, 6];

nums.splice(1, 0, 2); // inserts at index 1

console.log(nums); // [ 1, 2, 3, 4, 5, 6 ]

nums.splice(4,1,19); // replaces 1 element at index 4

console.log(nums); // [ 1, 2, 3, 4, 19, 6 ]

let el = nums.splice(2,1); // removes 1 element at index 2

console.log(nums); // [ 1, 2, 4, 19, 6 ]

console.log(el); // [ 3 ]


//FILL
let arr = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4

console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0]

// fill with 5 from position 1
console.log(arr.fill(5, 1)); // [1, 5, 5, 5]
console.log(arr.fill(6)); // [6, 6, 6, 6]


//REVERSE
let arr = [1, 2, 3, 4];

arr.reverse();

console.log(arr); // [ 4, 3, 2, 1 ]


//SORT
let months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort();

console.log(months); // ["Dec", "Feb", "Jan", "March"]

let array1 = [1, 30, 4, 21, 100000];

array1.sort();

console.log(array1); // [1, 100000, 21, 30, 4]

let array2 = [1, 30, 4, 21, 100000];

array2.sort(compareNumbers);

console.log(array2); // [ 1, 4, 21, 30, 100000 ]
function compareNumbers(a, b) { return a - b; }

let items = [

    { name: 'Edward', value: 21 },

    { name: 'Sharpe', value: 37 },

    { name: 'And', value: 45 }

];

// sort by value

items.sort(function (a, b) {// sort by value

    return a.value - b.value;

});

// sort by name

items.sort(function (a, b) {

    let nameA = a.name.toUpperCase(); // ignore upper and lowercase

    let nameB = b.name.toUpperCase(); // ignore upper and lowercase

    if (nameA < nameB) {
        return -1;
    }

    if (nameA > nameB) {
        return 1;
    }
});


//JOIN
let elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // "Fire,Air,Water"

console.log(elements.join('')); // "FireAirWater"

console.log(elements.join('-')); // "Fire-Air-Water"

console.log(['Fire'].join(".")); // Fire


//INDEXOF
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // 1
// start from index 2

console.log(beasts.indexOf('bison', 2)); // 4
console.log(beasts.indexOf('giraffe')); // -1


//CONCAT
const num1 = [1, 2, 3];

const num2 = [4, 5, 6];

const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


//INCLUDES
let arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true

arr.includes('b', -100); // true

arr.includes('c', -100); // true

arr.includes('a', -2); // false


//SLICE
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

let citrus = fruits.slice(1, 3);

let fruitsCopy = fruits.slice();

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple','Mango']

// citrus contains ['Orange','Lemon']


//FOREACH
const items = ['item1', 'item2', 'item3'];

const copy = [];

// For loop

for (let i = 0; i < items.length; i++) {

    copy.push(items[i]);

}

// ForEach

items.forEach(item => { copy.push(item); });


//FILTER
function isBigEnough(value) {

    return value >= 10;

};

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// filtered is [12, 130, 44]
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// Filter array items based on search criteria (query)

function filterItems(arr, query) {

    return arr.filter(function(el) {

        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;

    });

};
console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']


//FIND
let array1 = [5, 12, 8, 130, 44];
let found = array1.find(function(element) {

    return element > 10;

});

console.log(found); // 12


//SOME
let array = [1, 2, 3, 4, 5];

let even = function(element) {

// checks whether an element is even

    return element % 2 === 0;

};

console.log(array.some(even)); //true


//MAP
let numbers = [1, 4, 9];

let roots = numbers.map(function(num) {

    return Math.sqrt(num)

});

// roots is now [1, 2, 3]

// numbers is still [1, 4, 9]

const myUsers = [

    { name: 'chuloo', likes: 'grilled chicken' },

    { name: 'chris', likes: 'cold beer' },

    { name: 'sam', likes: 'fish biscuits' }

];

const usersByFood = myUsers.map(item => {

    const container = {};
    container[item.name] = item.likes;

    container.age = item.name.length * 10;
    return container;

});

console.log(usersByFood);


//REDUCE
const array1 = [1, 2, 3, 4];

const reducer =

    (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer)); // 10

console.log(array1.reduce(reducer, 5)); // 15



//NESTED ARRAYS
let arr = [

    [4, 6, 3, 0],

    [2, 1, -2],

    [-5, 17],

    [7, 3, 9, 12]

];


let arr = [[4, 5, 6],

    [6, 5, 4],

    [5, 5, 5]];

arr.forEach(printRow);

function printRow(row){

    console.log(row);

    row.forEach(printNumber);

}

function printNumber(num){

    console.log(num);

};