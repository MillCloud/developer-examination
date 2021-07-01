/**
 * @desc 对给定数组，返回这个数组的浅拷贝或深拷贝
 * @desc 数组元素只可能是 String、Number、Boolean、Undefined、Null、Array
 * @typedef {string | number | boolean | undefined | null} BaseType
 * @param {Array<BaseType | BaseType[]>} array
 * @returns {Array<BaseType | BaseType[]>} 传入数组的浅拷贝或深拷贝
 */
const arrayClone = (array) => {};

// 测试样例
const array = [1, "1", true, undefined, null, [1, 2]];
const newArray = arrayClone(array);
array[0] = 0;
array[2][0] = 0;
