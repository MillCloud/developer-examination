/**
 * @desc 对给定数组去重，对于引用类型，做或不做深层次比较都可以
 * @desc 数组元素只可能是 String、Number、Boolean、Undefined、Null、Object、Array
 * @param {Array<any>} array
 * @returns 去重后的数组
 */
const arrayDeduplication = (array) => {};

// 测试样例
const array = [
  "0",
  "0",
  0,
  0,
  true,
  true,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  {},
  {},
  { a: 1, b: 2 },
  { b: 2, a: 1 },
  [],
  [],
  [1, 2],
  [1, 2],
  [2, 1],
  [2, 1],
];
const newArray = arrayDeduplication(array);
console.log("array", array);
console.log("newArray", newArray);

// 不做深层次比较
// [
//   "0",
//   "0",
//   0,
//   0,
//   true,
//   true,
//   false,
//   false,
//   undefined,
//   undefined,
//   null,
//   null,
//   {},
//   {},
//   { a: 1, b: 2 },
//   { b: 2, a: 1 },
//   [],
//   [],
//   [1, 2],
//   [1, 2],
//   [2, 1],
//   [2, 1],
// ]
// [
//   "0",
//   0,
//   true,
//   false,
//   undefined,
//   null,
//   {},
//   {},
//   { a: 1, b: 2 },
//   { b: 2, a: 1 },
//   [],
//   [],
//   [1, 2],
//   [1, 2],
//   [2, 1],
//   [2, 1],
// ]

// 做深层次比较
// [
//   "0",
//   "0",
//   0,
//   0,
//   true,
//   true,
//   false,
//   false,
//   undefined,
//   undefined,
//   null,
//   null,
//   {},
//   {},
//   { a: 1, b: 2 },
//   { b: 2, a: 1 },
//   [],
//   [],
//   [1, 2],
//   [1, 2],
//   [2, 1],
//   [2, 1],
// ]
// ["0", 0, true, false, undefined, null, {}, { a: 1, b: 2 }, [], [1, 2], [2, 1]]
