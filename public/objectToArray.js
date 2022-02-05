/**
 * @desc 把给定对象转换成二维数组，不能改变给定对象
 * @desc 二维数组每个元素都是一个只有两个元素的数组，第一个元素是对象的键，第二个元素是对应键的值
 * @param {{ [key: string]: string | number; }} object
 * @returns {[string, string | number][]}
 */
const objectToArray = (object) => {};

// 测试样例
// const object = { a: 1, b: '2' };
// const array = objectToArray(object);
// console.log('array', array); // [['a', 1], ['b', '2']]
