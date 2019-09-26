//.indexOf - shows index value of array item
var fruits = ["app", "ban", "cher"];

var ban = fruits.indexOf("ban");

console.log(ban);

//.forEach - edits existing array
var ages = [1, 2, 3, 4];

ages.forEach(function(ages, i, arr) {
  arr[i] = ages + 1;
});

console.log(ages);

//.map - new or transformed copy of an array
var ages = [1, 2, 3, 4];

var newAge = ages.map(function(element) {
  return element + 1;
});

console.log(newAge);
console.log(ages);

//.filter - pulls out peices from array based on certain criteria
var names = ["suzie", "ben", "thomas", "chad"];

var shortNames = names.filter(function(val, i, arr) {
  return val.length <= 5;
});

console.log(shortNames);

//objects using delete
var backpack = {
  oldLaptop: "slow",
  oldLunch: "moldy",
  pencil: "sharp"
};

var oldStuff = ["oldLaptop", "oldLunch"];
for (var i = 0; i < oldStuff.length; i++) {
  delete backpack[oldStuff[i]];
}

console.log(backpack);

//copying with assign - one object to another
var obj1 = {
  name: "Joseph"
};

var objCopy = Object.assign({}, obj1);

obj1.name = "Joe";

console.log(objCopy);
console.log(obj1);

//assign - with something that looks like merging
var cat = {
  name: "fluffles"
};
var fish = {
  type: "fishy"
};
var mouse = {
  nickname: "stuart"
};

var zoo = Object.assign({}, cat, fish, mouse);

cat.name = "ruffles";

console.log(cat);
console.log(zoo);

//Objects - For in

var employee = {
  tom: "boat",
  chris: "car",
  james: "train"
};

var peeps = [];

for (var prop in employee) {
  peeps.push(prop);
}

var trans = [];

for (var prop in employee) {
  trans.push(employee[prop]);
}

for (var prop in employee) {
  employee[prop] = "walk";
}

console.log(peeps);
console.log(trans);
console.log(employee);

//reduce function in array - combines elements in an array and returns single value (i.e. reduces length of array)
let totalScores = [36, 39, 44, 49, 45, 48, 52];

let sumTotal = totalScores.reduce(function(total, val, i, arr) {
  return total + val;
}, 3000);

console.log(sumTotal);

//reducing array with strings
let lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"];

let song = lyricWords.reduce(function(total, val, i, arr) {
  return total + val;
});

console.log(song);

// chaining using map, filter, and reduce
let challengeArray = [1, 2, 3, 4, 5, 6];
// ===>>> Using map, filter, reduce, the array above and the concept of chaining... map through the above array and multiply each value by 5, then filter through the array returning only odd numbers, then reduce all the values to get a total.

let chainArray = challengeArray
  .map(function(element) {
    return element * 5;
  })
  .filter(function(val, i, arr) {
    return val % 2 === 1;
  })
  .reduce(function(total, value, index, array) {
    return total + value;
  });

console.log(chainArray);

// using delete
let deleteBadSpelling = {
  school: "DevMountain",
  topic: "Web Deeeeveloppin",
  grade: "We don't do that stuff"
};

delete deleteBadSpelling.topic;
console.log(deleteBadSpelling);

// object assigning (object.assign)
// ===>>> What will be the result of the code below when you uncomment it?
let arr = [1, 2, 3];
let arrCopy = arr;
console.log(arr === arrCopy);
// -------------------------------------------------

// ===>>> How do we fix this?
let copiedArray = arr.slice();
console.log(arr === copiedArray);

////////////DESTRUCTURING///////////////
let toDestructure = {
  name: "Jake",
  age: undefined,
  height: "5 ft and 11 3/4 inches"
};
let { name, age, height } = toDestructure;

console.log(name, age, height);

//next example on destrucuting objects

let yessa = {
  name: "Yessa Helpa",
  race: "Gungan",
  favoritePhrase: "Yessa",
  skills: ["Jumping", "talking", "talking more", "'helping'"],
  planet: "Binksia",
  friends: ["Obi Han", "Princess Leiadalla", "Chewywok"]
};
// ===>>> Using object destructuring and the yessa object above, save yessa's name and favoritePhrase into new variables.

let { name, favoritePhrase } = yessa;
console.log(name, favoritePhrase);

//SPREAD OPERATOR ...var value
let numbers = [1, 2, 3];
let second = [5, 6, 7];
// ===>>> Using the spread operator, create a copy of the numbers AND SECOND array above
const myCopy = [...numbers, ...second];
console.log(myCopy);

//
function multiply(num1, num2, num3) {
  return num1 * num2 * num3;
}
let myNumbers = [1, 2, 3, 4, 5, 6]; //only miultiplies first three numbers based on function above(num1, num2, num3)
console.log(multiply(...myNumbers));

//
