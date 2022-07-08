// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string;
  price: number;
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const allProducts: Product[] = [
  { name: "macbook pro", price: 2000 },
  { name: "iPhone", price: 1000 },
  { name: "iPad Pro", price: 2100 },
  { name: "apple watch", price: 450}
];

// function getTotal(product: Product[]): number {
//     var totalSum = 0;
//     for (var i = 0; i < product.length; i++) {
//       totalSum = totalSum + product[i].price;
//     }
//     return totalSum;
//   }

function getTotal(products: Product[]): number {
  var totalSum = 0;
  for (let product of products) {
    totalSum += product.price;
  }
  return totalSum;
}

console.log("The total cost is " + getTotal(allProducts));
