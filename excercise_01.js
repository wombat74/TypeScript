// Part 1
function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "One for " + name + ", one for me";
    //return "One for ${name}, one for me.";
}
// Part 2
// function isLeapYear(year: number): boolean {
//   if (year % 2 === 0) {
//     return true;
//   }
//   return false;
// }
// First attempt...
// const isLeapYear = (year: number): boolean => {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   }
//   return false;
// };
// Refactor below...
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(twoFer("Eddie"));
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
