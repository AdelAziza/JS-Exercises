/*-----
1.   Create a variable named myAge, and set it equal to your age as a number.

Write a comment that explains this line of code.*/

let myAge=26;


/*--
2.  Create a variable named earlyYears and save the value 2 to it. Note, 
the value saved to this variable will change.
Write a comment that explains this line of code.

*/

let earlyYears=2;

/*

Use the multiplication assignment operator to multiply the value 
saved to earlyYears by 10.5 
and reassign it to earlyYears.

*/

earlyYears*=10.5;


/*
Since we already accounted for the first two years, take the myAge variable, 
and subtract 2 from it.

Set the result equal to a variable called laterYears. 
We’ll be changing this value later.

Write a comment that explains this line of code.

*/

let laterYears = myAge-2;


/*
Multiply the laterYears variable by 4 to calculate the number of dog 
years accounted for by your later years. 
Use the multiplication assignment operator to multiply and assign in one step.
Write a comment that explains this line of code.
*/
laterYears*=4;


console.log(`This is an early age ${earlyYears} and this is later age ${laterYears}`);

//output : This is an early age 21 and this is later age 96


/*

Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.

Write a comment that explains this line of code.

*/
let myAgeInDogYears=earlyYears + laterYears ;

console.log(myAgeInDogYears );
//output : 117


/*
Let’s use a string method next.

Write your name as a string, call its built-in method .toLowerCase(), 
and store the result in a variable called myName.

The toLowerCase method returns a string with all lowercase letters.

Write a comment that explains this line of code.*/

let myNName='ADEL'.toLowerCase();

/*
Write a console.log statement that displays your name and age in dog years. 
Use string interpolation to display 
the value in the following sentence
Write a console.log statement that displays your name and age in dog years. 
Use string interpolation to display the value in the following sentence:
My name is NAME. 
I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
Replace NAME with myName, HUMAN AGE with myAge, 
and DOG AGE with myAgeInDogYears in the sentence above.*/

console.log(`My name is ${myNName}. I am ${myAge} HUMAN AGE years old in human years which is DOG AGE ${myAgeInDogYears} years old in dog years.`);

//output:
//My name is adel. I am 26 HUMAN AGE years old in human years which is DOG AGE 117 years old in dog years.