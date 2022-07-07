var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789
    }
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348
    }
};
// function getProfit(movie: Movie): number {
//   return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
// }
function getProfit(movie) {
    var _a = movie.boxOffice, grossWorldwide = _a.grossWorldwide, budget = _a.budget; // destructuring method
    return grossWorldwide - budget;
}
// function getProfit({boxOffice: { grossWorldwide, budget } }: Movie): number { // another destructuring method
//   return grossWorldwide - budget;
// }
var catsResults = getProfit(cats);
var duneResults = getProfit(dune);
console.log("Cats profits were: $" + catsResults);
console.log("Dune profits were: $" + duneResults);
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
