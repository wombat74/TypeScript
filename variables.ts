let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 4;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives ++;
numCatLives = "zero"

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";

// Type inference
let tvShow = "Olive Kitterage";
tvShow = "The Other Two";
tvShow = false;

let isFunny = false;
isFunny = "true";

// The Any type
let thing: any = "Hello";
thing = 1;
thing.toUpperCase();

// where you want to annotate. using Any is bad as it turns off TypeScript type checking
// const movies = ["Arrival", "The Thing", "Aliens"];
// let foundMovie;

// for (let movie of movies) {
//     if (movie === "Amadeus") {
//         foundMovie = "Amadeus";
//     }
// }

// foundMovie();
// foundMovie = 1;
// foundMovie.toUpperCase();

// with annotation
const movies = ["Arrival", "The Thing", "Aliens"];
let foundMovie: string;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}

foundMovie();
foundMovie = 1;
foundMovie.toUpperCase();


