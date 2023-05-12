
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check
*/


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
output(multiply(3,2));
output(multiply(3,-2));
output(multiply(3,0));

function multiply(a,b) 
{
	return a * b ;
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  