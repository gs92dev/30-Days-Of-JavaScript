// Exercices day 2
let challenge = "30 Days of JavaScript";
console.log(challenge);
// 3 - Number os characters in challenge
console.log(challenge.length);
//4 - String with lowercase letters
let challengeLower = challenge.toLowerCase();
console.log(challengeLower);
//5 - String with upper case letters
let challengeUpper = challenge.toUpperCase();
console.log(challengeUpper);
//6-String sliced
let  thirty = challenge.substring(0,2);
console.log(thirty);
//7-String Days of JS
let days = challenge.substring(3);
console.log(days);
//8-String includes Script -- True
console.log(challenge.includes("Script"));
//9 and 10- slipt in array format
let challengeArray= challenge.split(" ");
console.log(challengeArray);
//11- Split big techs
let bigTechs='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let arrayBigTechs= bigTechs.split(", ");
console.log(arrayBigTechs);
//12- Change Javascript to Python
let challengePython=challenge.replace("JavaScript", "Python");
console.log(challengePython);
//13- Find