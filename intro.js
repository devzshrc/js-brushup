var name = 'dev'; // variable
//scope issue -> usually avoided
const pi = 3.14; //constant

//Types of data
// Primitives or Non-primitives(Objects)

//these are primitives below
let number = 42.34; //Number
let text = 'HELLO'; //String
let isTrue = true; //Boolean
let nothing = null; // null - Object (technically)
let undefinedVar = undefined; //undefined
let symbol = Symbol(); //symbol

//Non-primitives - Objects
let person = {
  name: 'devashish',
  age: 19,
  isStudent: true,
};

//many times data comes in different format than expected -> so if you know how to convert that data into your known / required format -> work done
let num = '42';
// let convertedNum = Number(num);  //strict conversion => recommended for production usecases

let convertedNum = parseInt(num); //is more forgiving and older

console.log(convertedNum, typeof convertedNum);

//NaN is not technically a datatype -> its a reponse -> we can evaluate our evaluation according to this reponse

// xyx.com/event/124324324fsffsfre232
// sometimes in mongodb we get ObjectId=124324324fsffsfre232
//mostly it doesnt work as expected when u put it into mongodb because
//its default dataype in which you have recieved it is String
//You should know how to convert this String to ObjectId -> there you get introduced to a new datatype which is of mongodb called as ObjectId
//conversions are important
//That is the problem typescript solves
//You should always know your data

let str = 123;
let convertedStr = String(str);

//OPERATIONS
// () - parenthesis are your best friends while you work with oprations
(4 + (4 - 6)) * 3; //this is how it's used

//code readability -> top priority
let a = 10;
let b = 3;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

// Performing operations on data isn't that straight forward also -> we will have to come accross comparisons -> comparing data

//COMPARISON

//comparison: output is either true OR false
//comparison: means asking question - ans: always true or false
let x = 16;
let y = 10;
console.log(x == y); //only check data equality
console.log(x === y); //also checks for datatype equality -> strict comparison
console.log(x != y); //Not Equal To
console.log(x > y);
console.log(x < y);
console.log(`${x} <= ${y}`, x <= y); // less than OR equal to

// palyaround with them
// in core js => Math and DatTime Library
// in nodejs ecosystem => crypto and http

//Math -> an intrinsic (inbuilt) object that provides mathematics functionalities and constants
// Math is a built-in static object (not a constructor).
//returns a number between 0 and 1

// You call methods like Math.abs(x), not new Math()
console.log(Math.sqrt(x));
console.log(Math.random());
console.log(Math.random() * 10);

// String
let firstName = 'devashish';
let lastName = 'yadav';
// let fullName = firstName + lastName; //devashishyadav

let fullName = firstName + ' ' + lastName; //devashish yadav
let message = 'hwllo worldslfs';
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());

