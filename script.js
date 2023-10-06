"use strict"
function printTable(from, to, step, func) {
    if (func === undefined) {
        return;
    }
    from = from;
    to = to;
    step = step || 1;
    document.write("<table border='1' cellspacing='0'>");
    for (var x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + func(x) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

//with eval
let quadratic;
let cubic;
eval('quadratic = function (x) {return x * x;}');
eval('cubic = function (x) {return x * x * x;}');

//with Function 
// let quadratic = new Function("x", "return x * x");
// let cubic = new Function("x", "return x * x * x");

const functions = [quadratic, Math.sin, cubic, Math.cos];

function callbackTables() {
    let from = +prompt("Input 'from'");
    let to = +prompt("Input 'to'");
    let step = +prompt("Input step");
    let func = +prompt("Input number of function");
    printTable(from, to, step, functions[func - 1]);
}

callbackTables();