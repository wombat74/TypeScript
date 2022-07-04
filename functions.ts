// function square(num: number) {
//     return num * num
// }

// square(3);
// square("three");
// square(true);

// function greet(person: string) {
//     return 'Hi there, ${person}!'
// }

// greet(3)
// greet("Eddie")

const doSomething = (person: string, age: number, isFunny: boolean) => {
  // do something
};

doSomething("Eddie", 45, false);
doSomething("Joanne", 34);

// default value
function greet(person: string = "Stranger") {
  return "Hi there, ${person}!";
}

greet(3);
greet();
greet("Tony");

// *******************************************

function square(num: number): number {
  return num * num;
}

square(2);

// *******************************************

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

const colors = ["red", "orange", "blue"];
colors.map((color) => {
  return color.toUpperCase();
});

// a function that doesn't return anything will be of type void
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}
