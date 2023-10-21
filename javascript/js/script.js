//Closures
function makeMult (mult) {
    // var mult = 2;
    function b() {
        console.log("Mult is: " +mult);
    }
    b();
    return (
        function (x) {
            return mult * x;
        }

    );
}

var doubleAll = makeMult(2);
console.log(doubleAll(10)); //its own exec env