//Default values
function orderChickenWith(sideDish){
    // if (sideDish === undefined) {
    //     sideDish = "something"
    // }
    sideDish = sideDish || "whatever";
    console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();