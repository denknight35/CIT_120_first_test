var prompter = prompt("what is your total bill");

var number1=number(prompt("what is your first number?"));
var number2=number(prompt("what is your second number?"));
var answer=number1+number2
document.body.querySelector("#cool").innerHTML=answer;
document.body.querySelector("#lesscool").innerHTML=prompter;