//swap the first and last data of an array
//using indexing

// function reverseFirst(array) {
//   if (array.length < 2) {
//     return array;
//   }

//   var first = array[0];
//   var last = array[array.length - 1];

//   array[0] = last;
//   array[array.length - 1] = first;

//   return array;
// }

// console.log(reverseFirst([1, 2, 3, 4]));

// using the array methods
function reverseFirst(array) {
  if (array.length < 2) {
    return array;
  }
  var first = array.shift();
  var last = array.pop();

  array.unshift(last);
  array.push(first);

  return array;
}

console.log(reverseFirst([1, 2, 3, 4]));
