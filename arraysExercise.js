// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var allProducts = [
    { name: "macbook pro", price: 2000 },
    { name: "iPhone", price: 1000 },
    { name: "iPad Pro", price: 2100 },
];
// function getTotal(product: Product[]): number {
//     var totalSum = 0;
//     for (var i = 0; i < product.length; i++) {
//       totalSum = totalSum + product[i].price;
//     }
//     return totalSum;
//   }
function getTotal(products) {
    var totalSum = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        totalSum += product.price;
    }
    return totalSum;
}
console.log("The total cost is " + getTotal(allProducts));
