/**
 * @desc 把给定的二维数组转换成对象
 * @desc 二维数组每个元素都是一个只有两个元素的数组，第一个元素作为对象的键，第二个元素作为对应键的值
 * @param {[string, string | number][]} array
 * @returns {{ [propName: string]: string | number }} 一个对象
 */
const arrayToObject = (array) => {};

// 测试样例
const array = [
  ["a", 1],
  ["b", "2"],
];
const object = arrayToObject(array);
console.log("array", array); // [['a', 1], ['b', '2']]
console.log("object", object); // { a: 1, b: '2' }
