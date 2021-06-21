/**
 * @desc 对给定数组，返回这个数组的浅拷贝或深拷贝
 * @desc 数组元素只可能是 String、Number、Boolean、Undefined、Null、Object、Array
 * @param {Array<string | number | boolean | undefined | null | { [propName: string]: any; } | any[]>} array
 * @returns {Array<string | number | boolean | undefined | null | { [propName: string]: any; } | any[]>} 传入数组的浅拷贝或深拷贝
 */
const arrayClone = (array) => {};

// 浅拷贝测试样例
const array = [1, 2, { a: 1 }];
const newArray = arrayClone(array);
console.log("array", JSON.parse(JSON.stringify(array))); // [1, 2, { a: 1 }]
console.log("newArray", JSON.parse(JSON.stringify(newArray))); // [1, 2, { a: 1 }]
array[0] = 0;
console.log("array", JSON.parse(JSON.stringify(array))); // [0, 2, { a: 1 }]
console.log("newArray", JSON.parse(JSON.stringify(newArray))); // [1, 2, { a: 1 }]
array[2].a = 2;
console.log("array", JSON.parse(JSON.stringify(array))); // [0, 2, { a: 2 }]
console.log("newArray", JSON.parse(JSON.stringify(newArray))); // [1, 2, { a: 2 }]

// 深拷贝测试样例
const array = [1, 2, { a: 1 }];
const newArray = arrayClone(array);
console.log("array", JSON.parse(JSON.stringify(array))); // [1, 2, { a: 1 }]
console.log("newArray", JSON.parse(JSON.stringify(newArray))); // [1, 2, { a: 1 }]
array[0] = 0;
console.log("array", JSON.parse(JSON.stringify(array))); // [0, 2, { a: 1 }]
console.log("newArray", JSON.parse(JSON.stringify(newArray))); // [1, 2, { a: 1 }]
array[2].a = 2;
console.log("array", JSON.parse(JSON.stringify(array))); // [0, 2, { a: 2 }]
console.log("newArray", JSON.parse(JSON.stringify(newArray))); // [1, 2, { a: 1 }]
