/** @desc 把给定对象拍平，不能改变给定对象 */
const objectFlat = (object: any): any => {};

// 测试样例
// const object = { a : { b: 1, c: 2, d: { e: 3 }, b: [1, 2, { a: 3, b: 4 }], c: 3 }}
// const newObject = objectFlat(object);
// console.log('newObject', newObject); // { 'a.b': 1, 'a.c': 2, 'a.d.e': 3, 'b[0]': 1, 'b[1]': 2, 'b[2].a': 3, 'b[2].b': 4, 'c': 3 }
