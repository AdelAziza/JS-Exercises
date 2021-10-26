/*
//www.codecademy.com/courses/introduction-to-javascript/projects/kelvin-weather-javascript*/


/*----1.The forecast today is 293 Kelvin. To start, create a variable named kelvin, 
and set it equal to 293. The value saved to kelvin will stay constant. 
Choose the variable type with this in mind.

-----2. Write a comment above that explains this line of code.*/

//create a variable const for kelvin
const kelvin = 293;

/*----3.Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
*/

let celsius = kelvin-273;



/*----5.
Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

Fahrenheit = Celsius * (9/5) + 32

In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.*/

let fahrenheit=  celsius * (9/5) + 32;

/*----7.

When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.*/

Math.floor(fahrenheit);

/*----9.Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:*/

console.log(`The temperature is TEMPERATURE degrees ${fahrenheit}.`)
//The temperature is TEMPERATURE degrees 68.
