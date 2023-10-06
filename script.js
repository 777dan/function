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

function callbackTables() {
    let from = +prompt("Input 'from'");
    let to = +prompt("Input 'to'");
    let step = +prompt("Input step");
    let expr = prompt("Input expression in the form 'x*x'");

    //with Function
    // let f = new Function("x", "return " + expr);

    //with eval
    let f;
    eval('f = function (x) {return ' + expr + ';}');

    printTable(from, to, step, f);
}

callbackTables();