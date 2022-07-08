const activeUsers: string[] = [];
activeUsers.push("eddie");
activeUsers.push("sophie");
activeUsers.push("joanne");

const ageList: number[] = [1, 2, 3];
ageList.push(4);
//ageList.push("mike"); cannot push a string to an array annotated for number type

//const bools: Array<boolean> = [] this is equivelant to the line below
const bools: boolean[] = [];

type Points = {
  x: number;
  y: number;
};

const coords: Points[] = [];
coords.push({ x: 23, y: 45 });
// coords.push({ y: 45 }); this will not work as the array is expecting the "x" parameter

// 2 dimensional array
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
