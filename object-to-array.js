/**
 * @desc 把给定的对象转换成二维数组
 * @desc 二维数组每个元素都是一个只有两个元素的数组，第一个元素是对象的键，第二个元素是对应键的值
 * @param {{ [propName: string]: string | number; }} object
 * @returns {[string, string | number][]}一个数组
 */
const objectToArray = (object) => {};

// 测试样例
const object = { a: 1, b: "2" };
const array = objectToArray(array);
console.log("object", object); // { a: 1, b: '2' }
console.log("array", array); // [['a', 1], ['b', '2']]
