function printName(person: { first: string; last: string }): void {
  console.log("${person.first} ${person.last}");
}

printName({ first: "Eddie", last: "Gonzalez" });

// typing variables
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// // annotate return type of a function
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// wierd: if you try to pass an extra value in an object literal
// TS will complain
// printName({ first: "Mick", last: "Jagger", age: 473 });

// but if you assign the object literal to a variable, and pass that to the function
// TS will not complain
// let singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
// printName(singer);

// typing variables
// set a type Alias to establish a patter to be used in multiple functions/variable assignments
// type Point = {
//   x: number;
//   y: number;
// };

// let coordinate: Point = { x: 34, y: 2 };

// // annotate return type of a function
// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): Point {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// nested function annotation
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(song.title + " - " + song.artist);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1243254,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

// object with optional parameter
type Point = {
  x: number;
  y: number;
  z?: number; // the ? makes this property optional
};

const myPoint: Point = { x: 1, y: 2 };

// read only properties
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 21312,
  username: "catgirl",
};

console.log(user.id);
// user.id = 324234; // cannot set the property as it is read only

// intersection types
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "Yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 8,
  breed: "husky",
  age: 9,
};
