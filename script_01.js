
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

// module: calculator | tests:

// agreement : "+","-","*",":","/"
startApp()
function startApp() 
{
	output(calculator(getNum(),getNum(),getOp()));
}

function getNum() 
{
	return parseInt(prompt("Zahl?"));
}
output(getOp());
function getOp() 
{
	return prompt("Operator");
}
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
function calculator(a,b,op)
{
	switch (op) {
		case "+":
			return add(a,b);
		case "-":
			return subtract(a,b);
		case "*":
			return multiply(a,b);
		case "/":
		case ":":
			return division(a,b);
			
			break;
	
		default:
			return ERROR_STR_GEN;
	}
}



// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));

function add(a,b)
{
	let c = a + b;
	return c;
}

// module: subtraction a - b |
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
function subtract(a,b) 
{
	return a - b;
}

// module: multiplication a * b |
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));

function multiply(a,b) 
{
	return a * b ;
}

// module: division a / b |
// output(division(3,2));
// output(division(3,-2));
// output(division(3,0));

function division(a,b) 
{
	if (b != 0) { // Ausnahme + Abbruch
		return a / b ; 
	} else {
	return ERROR_STR_DIV // Regel
	}
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  