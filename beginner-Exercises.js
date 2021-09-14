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



