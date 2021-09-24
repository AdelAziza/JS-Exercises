var firstName = 'Lila';

// Exercise 2
// Which value does x have after execution of the following code?
let m = 'Geeta';
// node
//output : Geeta

// Exercise 3
//Several variables are declared and initialized in 2 program lines:
let city = 'Lubumbashi';
let country = 'Congo';
//  Exercise 4
//  Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'
let flower='rose';
let tree="maple";

// Exercise 5
// Which value does x have after execution of the following code?
let x = 'Tic';
p = 'Tac';
p = 'Toe';

//Answer: 'Toe'

// Exercise 6

// // Which value does x have after execution of the following code?
// let h = 'Laurel';
// let f n= 'Hardy';
// let z = y;
// y = h;
// i = z;

//Answer : 'Hardy'


// Exercise 6
// Define a function hello that returns 'Hello world!'.

function hello(){
    return 'Hello world!';
    }
//output : Hello world


// Exercise 7
// Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.

function a () {
    return 'Hello a!';
    }
    
function b () {
    return 'Hello b!';
    }

//     Exercise 8
// 1. Define a function greet returning the value 'Haydo!'.
// 2. Declare a variable salutation. Call the function greet and assign the result of the call to the variable salutation.

function greet () {

    return 'Haydo!';
   }
   
let salutation = greet();

// Exercise 9
// Which value does x have after execution of the following code?
function hello() {
  return 'Hi!';
}

let y = hello();

//Answer: 'Hi

// Exercise 10
// Which value does x have after execution of the following code?
function reply(phrase) {
  return phrase;
}

let t = reply('How do you do?');

//Answer: How do you do?


// Exercise 11
// Write a function greet having one parameter and returning 'Hello <parameter>!'.

// Example: greet('Ada') should return 'Hello Ada!' and greet('Grace') should return 'Hello Grace!'.

function greet(a){
    return 'Hello'+ ' ' + a + '!'
   
   }
   
   greet('Ada');

//answer Hello Ada !

// Exercise 12
// Which value does x have after execution of the following code?
function whereIs(name) {
  return 'Where is ' + name + '?';
}

let c = whereIs('Jacky');

//Answer : 'Where is Jacky?'

// Exercise 13
// Which value does x have after execution of the following code?
function hi(name) {
  return 'Hi ' + name + '!';
}

let h1 = hi('Selva');
let h2 = hi('Pola');
let cc = h1 + ' ' + h2;

//Answer : 'Hi Selva! Hi Pola!'


// Exercise 14
// Write a function log that logs 'Hello Console!'. If you are working with a desktop browser, open the developer tools to see the output there as well.

function log(){
    return 'Hello Console!'
    
    }
    
console.log(log());

// Exercise 15
// Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged.


function shout(para){
    let output = para + para
    
    console.log(output);
    
    return output
    }
    shout('Adel');


/*String: length
    Strings have the length property. This property represents the number of characters in a string. To do this, you must append .length to the string or to the variable that contains the string:*/

//Exercise 16
//Write a function length that takes a string and returns the number of characters of the string.

//Example: length('sun') should return 3.

function length(parra){

    value = parra.length;
    
    return value
    
    }

/*Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.

Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.*/
//Exercise 17
    function toCase(ss){

    return ss.toLowerCase() + '-' + ss.toUpperCase();        
    }
        
    console.log(toCase('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'));


    // Exercise 18

    /*String: charAt()
    To get a character from a string at a specified index, use the charAt(index) method:*/
    function shortcut(p1,p2){

        return p1.charAt(0,0)+ p2.charAt(0,0,1)// use to get the first letter of the word
        
        //output () // First and second name together
        
        }
    console.log(shortcut('Adel', 'Useni'));
    //output : AU

    //Exercise 19
//     String: trim()
// The trim method removes whitespaces from both ends of a string.

// Write a function firstChar, which returns the first character that is not a space when a string is passed.

// Example: firstChar(' Rosa Parks ') should return 'R'.

function firstChar(a){

    let value= a.trim();
    
    return value.charAt(0);
    
    }

    /*Exercise 20
    Write a function normalize, that replaces '-' with '/' in a date string.
    
    Example: normalize('20-05-2017') should return '20/05/2017'*/

    function normalize(i){

        let value =i.replace('-','/').replace('-','/');
        
        return value;

        //output: '20/05/2017'

    }


       
/*Rounding
If you want to round a number, you can use the Math.round(), Math.floor() and Math.ceil() functions.

Write a function round100 that rounds a number to the nearest hundred.

Example: round100(1749) should return 1700 and round100(856.12) should return 900.*/
//Answer :

function round100(num1){

let numD=Math.round(num1/100)*100;

return numD

}

//Examples:

round100(49.999) returns 0.

round100(50) returns 100.

round100(349) returns 300.

round100(350) returns 400.

round100(4649) returns 4600.

round100(4650) returns 4700


/*Random numbers
Math.random() returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
Exercise
Write a function dice that returns like a dice a random number between 1 and 6.*/

function dice (){

 const rndInt = Math.floor(Math.random() * 6) + 1


return rndInt 
}
// Output :


/*Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'.

Example: add('102+17') should return 119.*/

function add (s){

    let summand1 = parseInt(s, 10);
    let indexPlus = s.indexOf('+');
    let sAfterPlus = s.substr(indexPlus + 1);
    let summand2 = parseInt(sAfterPlus, 10);
    return summand1 + summand2;

}

/*Boolean
Another important data type next to String and Number is Boolean. 
It has only two possible values: true and false. 
You can calculate with Boolean values similar to numbers. 
JavaScript has three Boolean operators: && (and), || (or) and ! (not). && links two Boolean values. If both values are true, the result is true. In all other cases it is false. With || the result is true, if at least one of the two input values is true. If both input values are false, the result is false. ! is applied to a single Boolean value and inverts this value: !true is false and !false is true.*/
function xor(a,b){

return ( a || b ) && !( a && b );)( foo, bar )
}

/*Write a function equals that checks 3 values for strict equality. The function should only return true if all 3 values are equal.

Example: equals(1, 1, 1) should return true and equals(1, 2, 1) should return false.*/
function equals(num1,num2,num3){

return num1===num2&&num2===num3

}
equals(1,'3','Hello');
//return false

/*Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.

Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.*/

function unequal(num1,num2,num3){

return num1!==num2 && num1!==num3 && num2!==num3

}
unequal(1, 2, 3) returns true.

/*Exercise
Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.

Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'*/

function repdigit (num){
let ones = num % 10;
let tens = Math.floor(num / 10);
  if (ones === tens) {
    return 'Repdigit!';
  }
  return 'No Repdigit!';

}
//Tests:
repdigit(11) returns 'Repdigit!'

repdigit(12) returns 'No Repdigit!'.



