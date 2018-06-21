const tuple = {};
const key = tuple[0];
const val = tuple[1];

// Object.defineProperty(tuple, key, {
//   value: val,
//   writable: false
// });


// console.log(tuple.value);

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

console.log(object1);

// Object.defineProperty(object1, 'property1', {
//   value: 42,
//   writable: false
// });


// Object.defineProperties(tuple, {
//     key: {
//     	value: val,
//         writable: true
//     }
// });
// console.log(tuple);

// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true
//   },

//   property2: {}
// });