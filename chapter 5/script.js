// // //Q#1 Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// // var Num1 = 3;
// // var Num2 = 5;
// // var Num = Num1 + Num2;
// // document .write(`Sum of ${ Num1} and ${Num2} is ${Num}<br/><br/>`);

// // Q#2 Repeat task1 for subtraction, multiplication, division & modulus. 
// var NumSub = Num1 - Num2;
// document .write(`Subtraction of ${ Num1} and ${Num2} is ${NumSub} <br/>`);
// var NumMul = Num1 * Num2;
// document .write(`Multiplication of ${ Num1} and ${Num2} is ${NumMul} <br/>`);
// var NumDiv = Num1 / Num2;
// document .write(`Division of ${ Num1} and ${Num2} is ${NumDiv} <br/>`);
// var NumMod = Num1 % Num2;
// document .write(`Mode of ${ Num1} and ${Num2} is ${NumMod} <br/><br/>`);

// // // Q#3 Do the following using JS Mathematic Expressions 
// // // a. Declare a variable. 
// // var MyVariable;
// // // b. Show the value of variable in your browser like “Value after variable declaration is: ??”
// // document .write(`Value after variable declaration is: ${MyVariable} <br/>`);
// // // c. Initialize the variable with some number. 
// // var MyNumber = 5;
// // // d. Show the value of variable in your browser like “Initial value: 5”. 
// // document .write (`Initial value: ${MyNumber} <br/>`);
// // // e. Increment the variable. 
// // document .write (`${++MyNumber} <br/>`);  //pre-increment
// // // document .write (`${MyNumber++} <br/>`);  //post-increment
// // // f. Show the value of variable in your browser like “Value after increment is: 6”. 
// // document .write (`Value after increment is: ${MyNumber} <br/>`);
// // // g. Add 7 to the variable.
// // var  MyNewNum =MyNumber + 7; 
// // document .write (`${MyNewNum}  <br/>`);
// // // h. Show the value of variable in your browser like “Value after addition is: 13”.
// // document .write (`Value after addition is: ${MyNewNum}  <br/>`);
// // // i. Decrement the variable. 
// // document .write (`${--MyNewNum} <br/>`);  //pre-Decrement
// // // document .write (`${MyNumber--} <br/>`);  //post-Decrement
// // // j. Show the value of variable in your browser like “Value after decrement is: 12”.
// // document .write (`Value after Decrement is: ${MyNewNum} <br/>`);
// // // k. Show the remainder after dividing the variable’s value by 3. 
// // var Reminder = MyNewNum % 3;
// // document .write (`The Renibder is :${Reminder}  <br/><br/>`);

// // // Q#4 Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable &
// // //  calculate the cost of buying 5 tickets to a movie. Example output:
// // var Ticket = 600;
// // var Output = 600*5;
// // document .write (`The Total cost of buying 5 tickets to a movie is ${Output} PKR<br/><br/>`);

// // //Q# 5. Write a script to display multiplication table of any number in your browser.
// // var MyTable = "<h3>Table of 4</h3>";
// // var table = 4;
// // document .write(`${table} x 1 = ${table * 1} <br/>`);
// // document .write(`${table} x 2 = ${table * 2} <br/>`);
// // document .write(`${table} x 3 = ${table * 3} <br/>`);
// // document .write(`${table} x 4 = ${table * 4} <br/>`);
// // document .write(`${table} x 5 = ${table * 5} <br/>`);
// // document .write(`${table} x 6 = ${table * 6} <br/>`); 
// // document .write(`${table} x 7 = ${table * 7} <br/>`);
// // document .write(`${table} x 8 = ${table * 8} <br/>`);
// // document .write(`${table} x 9 = ${table * 9} <br/>`);
// // document .write(`${table} x 10 = ${table * 10} <br/><br/>`);

// // // Q#6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// // // a.  Store a Celsius temperature into a variable.
// // var CelsiusTemperature = 25;
// // // b. Convert it to Fahrenheit
// // var FahrenheitTemperature = (CelsiusTemperature * 9/5) + 32;
// // document.write (`${CelsiusTemperature}°C is ${FahrenheitTemperature}°F <br/>`);
// // // c. Now store a Fahrenheit temperature into a variable. 
// // var FahrenheitTemperature = 70;
// // // d. Convert it to Celsius & output “NNoF is NNoC”. 
// // let celsiusTemperature = (FahrenheitTemperature - 32) * 5/9;
// // document.write(`${FahrenheitTemperature}°F is ${celsiusTemperature}°C <br/> <br/>`);

// // // Q#7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store 
// // // the following in variables 
// // // a. Price of item 1
// // var Item_1_Price = 650;
// // // b. Price of item 2
// // var Item_2_Price = 100;
// // // c. Ordered quantity of item 1
// // var quantityOfItem1 = 3;
// // // d. Ordered Quantity of item 2
// // var quantityOfItem2 = 7;
// // // e. Shipping charges 
// // var ShippingCharges = 100;
// // // Compute the total cost & show the receipt in your browser.
// // document.write("<h1>Shopping Cart</h1>");
// // document.write(`Price of item 1 is ${Item_1_Price} <br/>`);
// // document.write(`Quanrtity of item 1 is ${quantityOfItem1} <br/>`);
// // document.write(`Price of item 2 is ${Item_2_Price} <br/>`);
// // document.write(`Quanrtity of item 2 is ${quantityOfItem2} <br/>`);
// // document.write(`Shipping Charges ${ShippingCharges} <br/> <br/>`);
// // document.write(`Total cost of your order is ${(Item_1_Price * quantityOfItem1) +  (Item_2_Price * quantityOfItem2) +ShippingCharges} <br/> <br/>`);

// // // 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in  your browser 
// // document.write("<h1>Mark Sheet</h1>");
// // var TotalMarks = 980;
// // document.write(`Total marks: ${ TotalMarks} <br/>`);
// // var ObtainMarks = 804;
// // document.write(`Marks Obtained: ${ObtainMarks} <br/>`);
// // document.write(`${(ObtainMarks / TotalMarks)*100}% <br/> <br/>`);

// // // Q#9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// // // Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// // // and 1 Saudi Riyal = 28 Pakistani Rupee)
// // document.write(`<h1>Currency in PKR</h1> <br/> Total Currency in PKR: ${(10 * 104.80) + (25 * 28)} <br/> <br/>`)

// // // Q#10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// // var num1 = 3;
// // // a. Add 5 
// // // b. Multiply by 10 
// // // c. Divide the result by 2 
// // // Perform all calculations in a single expression 
// // document.write(`${(num1 + 10)* 10 / 2} <br/><br/>`);

// // // Q#11. The Age Calculator: Forgot how old someone is? Calculate it!
// // document.write(`<h1>Age Calculator</h1>`); 
// // // a. Store the current year in a variable. 
// // var CurrentYear = 2024;
// // document.write(`Current year : ${CurrentYear}<br/>`);
// // // b. Store their birth year in a variable. 
// // var BirthYear = 2004;
// // document.write(`Birth year : ${BirthYear}<br/>`);
// // // c. Calculate their 2 possible ages based on the stored values.
// // var PosibleValue1 = 20;
// // var PosibleValue2 = 21;
// // // Output them to the screen like so: “They are either NN or NN years old”. 
// // document.write(`Your age is :${PosibleValue1 }<br/><br/>`);

// // // Q#12. The Geometrizer: Calculate properties of a circle. 
// // document.write(`<h1>The Geometrizer</h1>`);
// // // a. Store a radius into a variable. 
// // var radius = 10;
// // document.write(`Radius Of a Circle is: ${radius} <br/>`);
// // // b. Calculate the circumference based on the radius,
// // document.write(`The  Circumference is: ${2 * 3.142 * 10} <br/>`);
// // // c. Calculate the area based on the radius
// // document.write(`The area is: ${3.142 * 10^2}`);

// // // Q#13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// // document.write(`<h1>The Lifetime Supply Calculator</h1>`);
// // // a. Store your favorite snack into a variable 
// // var FavSnack = "Kurkure";
// // document.write(`Favorite snack: ${FavSnack} <br/>`);
// // // b. Store your current age into a variable. 
// // var CurrentAge = 20;
// // document.write(`Current age: ${CurrentAge} <br/>`);
// // // c. Store a maximum age into a variable. 
// // var MaxAge = 70;
// // document.write(`Estimate maximum age: ${MaxAge} <br/>`);
// // // d. Store an estimated amount per day (as a number). 
// // var AmountPerDay = 1;
// // document.write(`Amount of snacks per day: ${AmountPerDay} <br/>`);
// // // e. Calculate how many would you eat total for the rest of 
// // // your life. 
// // var totalSnacks = (MaxAge - CurrentAge) * 365 * AmountPerDay;

// // document.write(`You will need ${totalSnacks} ${FavSnack} to last you until the ripe old age of ${MaxAge}.<br/>`);