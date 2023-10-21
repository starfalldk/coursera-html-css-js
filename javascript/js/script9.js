//Obj literals and "this"
var litCircle = {       //new Object()
    radius: 10,
    getArea: function() {
        var self = this;
        console.log(this);

        var incRad = function(){
            self.radius = 20;
        };
        incRad();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
}
console.log(litCircle.getArea());