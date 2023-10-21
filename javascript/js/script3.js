var string = "Hello";
string += " World";
console.log(string + "!")

//MATH: +, -, *, /
console.log((5+4)/3);
console.log(undefined/5);
function test1 (a) {
    console.log(a/5);
}
test1();
test1(10)

//Equality
var x = 4, y = 4;
if (x == y) {
    console.log("x=4 is equal to y=4")
}

x = "4";
if (x == y) {
    console.log("x='4' is equal to y=4")
}

//Strict Equality
if (x === y) {
    console.log("Strict x='4' is equal to y=4")
}
else {
    console.log("Strict x='4' is NOT equal to y=4")
}

//IF statement (all false)
if (false || null || undefined || "" || 0 || NaN) {
    console.log("Line is NOT execute")
}
else {
    console.log("all false")
}

//IF statement (all true)
if (true && "hi" && 1 && "false" && -1) {
    console.log("all true")
}


//{} style
// Curly brace same/next line
function a() 
{
    return //; =returns nothing
    {
        name : "Dimas"
    };
}

function b() {
    return {
        name : "Dimas"
    };
}
console.log(a());
console.log(b());

//FOR loop
var sum = 0;
for (var i = 0; i < 10; i++) {
    //console.log(i);
    sum += i;
}
console.log(sum);