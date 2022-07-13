// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
highScore = 1;
highScore = false;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var thingys = [1, 2];
//thingys.push("eddie"); // must be all numbers or all strings
thingys.push(3);
// Create an array called colors that can hold a mixture of RGB and HSL color types
var myColors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
// function greetings(myName): string | string[] => {
//     if(typeof(myName) Array) {
//         for (var i = 0; i < myName.length; i++) {
//             console.log("Hello " + myName[i]);
//         }
//         } else {
//             console.log("Hello " + myName);
//         }
//     }
// }
var greetings = function (person) {
    if (typeof person === "string") {
        console.log("Hello " + person);
    }
    else {
        for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
            var p = person_1[_i];
            console.log("Hello " + p);
        }
    }
};
var myFam = ["eddie", "joanne", "sophie", "roxy"];
var myName = "eddie";
greetings(myFam);
greetings(myName);
