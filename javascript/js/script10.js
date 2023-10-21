//Arrays

var a = new Array();
a[0] = "Dima";
a[1] = 2;
a[2] = function(name) {
    console.log("Hello " + name);
};
a[3] = {course: "JS"};

console.log(a);
console.log(a[1]);
a[2](a[0]);
console.log(a[3].course);

//short hand array creation
var names = ["Dima", "John", "Joe"];
console.log(names);

var nams = [
    { name: "Dima"},
    { name: "John"},
    { name: "Joe"}
];
console.log(nams);

for (var i = 0; i < names.length; i++){
    console.log("Hello " + names[i]);
}

names[100] = "Jim" //causes 97 undefined, because [3]-[99] are empty(undefined)
for (var i = 0; i < names.length; i++){
    console.log("Hello " + names[i]);
}


var names2 = ["Dima", "John", "Joe"];
var myObj = {
    name: "Dima",
    course: "JS",
    platform: "Coursera"
};

for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop])
}

for (var name in names2) {
    console.log("Hello " + names2[name])
}
names2.greeting = "Hi!";

for (var name in names2) {
    console.log("Hello " + names2[name])
}