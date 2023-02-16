//1.Convert the text into an UPPERCASE text:

let txt1 = "Hello World!";
txt1 = txt1.toUpperCase();


//2.Use the slice method to return the word "bananas".

let txt2 = "I can eat bananas all day";
let x = txt2.slice(10,17);


//3.Use the correct String method to replace the word "Hello" with the word "Welcome".

let txt3 = "Hello World!";
txt3 = txt3.replace("Hello", "Welcome");


//4.Convert the value of txt to upper case.

let txt4 = "Hello World";
txt4 = txt4.toUpperCase();


//5.Convert the value of txt to lower case.

let txt = "Hello World";
txt = txt.toLowerCase();



//6.Use the correct Array method to remove the last item of the fruits array.


const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();


//7.Use the correct Array method to add "Kiwi" to the fruits array.

const fruits2 = ["Banana", "Orange", "Apple"];
fruits2.push("Kiwi");


//8.Use the splice() method to remove "Orange" and "Apple" from fruits.

const fruits3 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits3.splice(1,2);