function test(){
    console.log(this);
    this.name = "Dimas";
}
test();
console.log(window.name);

//func constructor
function Circle (radius) {
    this.radius = radius;
    // this.getArea = 
    //     function () {
    //         return Math.PI * Math.pow(this.radius, 2);
    //     };
}
Circle.prototype.getArea =      //better to be outside the Object
    function () {
        Math.PI * Math.pow(this.radius, 2);
    }

var myCirc =  new Circle(10); //new Object()
console.log(myCirc);

var otherCirc = new Circle(20);
console.log(otherCirc);