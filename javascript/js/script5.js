//Object creation

var company = new Object();
company.name =  "Face";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Ceo Name is: " + company.ceo.firstName);
console.log(company["name"]);

var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock Price: " + company[stockPropName]);


//Object literal
var fb = {
    name: "Facebook",
    ceo: {
        firstName: "Marik",
        favColor: "cyan"
    },
    "stock of company": 110
};

console.log(fb);
console.log(fb.ceo.firstName);