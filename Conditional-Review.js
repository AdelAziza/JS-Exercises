/*--------------------------------If Statement-------*/

let sale =true;
sale=false;

if(sale){
  console.log('Time to buy!')
}

//output: nothing

/*------------------------------If...Else Statements------*/
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}
else{
  console.log('Time to wait for a sale.')
}

//output: Time to wait for a sale.

/*-------------------------Comparison Operators--------------------
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==*/

let hungerLevel=11;
if(hungerLevel < 7){
  console.log('Time to eat!');
}
else{
  console.log('We can eat later!')
}

//OUTPUT : We can eat later!


/*----------------------------Logical Operators----------------------
the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)
*/

//When we use the && operator, we are checking that two things are true:

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

//If we only care about either condition being true, we can use the || operator:

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

/*Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8.

If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'.*/

let mood = 'sleepy';
let tirednessLevel = 6;

if(mood==='sleepy' || tirednessLevel>8){
console.log('time to sleep');
}
else{
console.log('not bed time yet');
}

// Tenary Operator
mood==='sleepy' || tirednessLevel>8? console.log('time to sleep') : console.log('not bed time yet');
//output: time to sleep
/*-----------------------------Truthy and Falsy Assignment*-------------------------
Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is 
defined and assigns a default string if it is not:*/
let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil =  tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

//The pen is mightier than the sword.


/*---------------------Ternary Operator-----------------------
In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

Take a look at the if...else statement example:*/

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

//Change it to Ternary Operator

isNightTime?console.log('Turn on the lights!') : console.log('Turn off the lights!')




/*--------------------------The else if statement----------------------

We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes.

*/
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if(season==='winter'){
console.log('It\'s winter! Everything is covered in snow.')
}
else if (season==='fall'){
  console.log('It\'s fall! Leaves are falling!');
}
else if(season==='summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}
//output: It's sunny and warm because it's summer!
//It's sunny and warm because it's summer!

//Create a small project to check the year we are in
//charasterise this year

let actualYear=2021;

if(actualYear===2019){
  console.log('the most challenging year due to covid 19')
}
else if(actualYear===2020){
  return 'Year things started to come back'
}
else if(actualYear===2018){
  return 'When we were enjoying life'
}
else if(actualYear===2021){
  return 'We started to live with the virus and accept our situation'
}
else{
  return 'Life is challenging'
}




/*--------------------------The switch keyword-------------------------

A switch statement provides an alternative syntax that is easier to read and write
*/
//change this : in switch
let actualYear=2021;

switch(actualYear){
case 2019:
  console.log('the most challenging year due to covid 19');
  break;
case 2020:
  console.log('Year things started to come back');
  break;
case 2018:
  console.log('When we were enjoying life');
  break;
case 2021:
  console.log('We started to live with the virus and accept our situation');
  break;
default:
  console.log;('Life is challenging');
  break;

}