/**
 * @desc 把给定二维数组转换成对象，不能改变给定数组
 * @desc 二维数组每个元素都是一个只有两个元素的数组，第一个元素作为对象的键，第二个元素作为对应键的值
 */
const arrayToObject = (array: [string, string | number][]): Record<string, string | number> => {};

// 测试样例
// const array = [
//   ['a', 1],
//   ['b', '2'],
// ];
// const object = arrayToObject(array);
// console.log('object', object); // { a: 1, b: '2' }
