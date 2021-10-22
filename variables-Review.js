/*In short, variables label and store data in memory. There are only a few things you can do with variables:

Create a variable with a descriptive name.
Store or update information stored in a variable.
Reference or “get” information stored in a variable.*/


/*let keyword was introduced in ES6. The let keyword signals that the variable 
can be reassigned a different value. Take a look at the example:*/

/*----------------------let and var --------------------*/
let price;
console.log(price); // Output: undefined
//not being assigned

price = 350;
console.log(price); // Output: 350

var planet;
console.log(planet);//undefined

// let and var can be assigned
let changeMe = true;
changeMe = false;

console.log(changeMe ); // output : false

/*----------------------Const--------------------*/

// cannot be reassigned because it is constant. If you try to reassign 
//a const variable, you’ll get a TypeError
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

/*---------------Mathematical Assignment Operators---------------*/

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp+=5;
//The value of levelUp: 15

powerLevel -=100;
//The value of powerLevel: 8901

multiplyMe *=11;
//The value of multiplyMe: 352

quarterMe /=4;
//The value of quarterMe: 288

+ addition
- subtraction
* multiplication
/ division
% modulo

/*------------The Increment and Decrement Operator--------------*/

let add = 10;
a++;
console.log(add); // Output: 11

let sustr= 10;
a--;
console.log(sustr); // Output: 9


/*--------------String Concatenation with Variables------------*/

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'





/*------------String Interpolation------------------
One of the biggest benefits to using template literals is the readability of 
the code. Using template literals, you can more easily tell what the new string will be. 
You also don’t have to worry about escaping double quotes or single quotes.

*/

let myName='AdelZizou';

let myCity='Bellevue';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

//My name is AdelZizou. My favorite city is Bellevue.



/*------------------The typeof operator----------------------
checks the value to its right and returns, 
or passes back, a string of the data type.*/

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean




