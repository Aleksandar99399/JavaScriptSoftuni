import * as myModule from './module1.js';
import {people} from './data.js';


const myVar = 3;

const result = myModule.addNumbers(myVar,myModule.segetNumber());

myModule.output('The result is ' + result + ' -> ' + people.join(' : '));