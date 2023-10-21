//Functions

function mult(x,y) {
    return x * y;
}

console.log(mult(5,3))
mult.version = "v.1.0.0";

console.log(mult.version);
console.log(mult.toString());

//Function factory
function makeMultiplier (multiplier) {
    var myF = function (x) {
        return multiplier * x;
    };

    return myF;
}

var multBy3 = makeMultiplier(3);
console.log(multBy3(10))

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


// Passing func as argument
function doOperationOn (x, op) {
    return op(x);
}

var result = doOperationOn(5, multBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);