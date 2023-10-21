(function (window){

    var dimaGreeter = {};
    dimaGreeter.name = "Dima";
    var greeting = "Hello ";
    dimaGreeter.sayHello = function () {
        console.log(greeting + dimaGreeter.name);
    }

    window.dimaGreeter = dimaGreeter;
})(window);