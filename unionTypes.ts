let age: number | string = 223;
age = 12;
age = "34";

type Pointer = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Pointer | Loc = { x: 1, y: 45 };
coordinates = { lat: 23423, long: 23423 };

// union types with functions

function printAge(age: number | string): void {
  console.log("You are " + age + " years old.");
}

printAge(87);
printAge("23");

// below we use "type narrowing" to force the correct type

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

//const stuff: any[] = [1,2,3,true,"asds"];

const stuff: (number | string)[] = [1, 2, 3, "eddie"]; // array that can hold multiple types.

const locations: (Pointer | Loc)[] = [];
locations.push({ x: 123, y: 23423 });
locations.push({ lat: 123, long: 23423 });

// literal types
let zero: 0 = 0;
//zero = 2;

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let myDay: DayOfWeek = "Monday";
