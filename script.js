"use strict"
let expr = prompt("Input expression");
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
// let f;
// eval('f = function (x) {return ' + expr + ';}');

//with Function
let f = new Function("x", "return " + expr);

printTable(0, 10, 1, f);