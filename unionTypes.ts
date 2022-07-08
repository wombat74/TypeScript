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
