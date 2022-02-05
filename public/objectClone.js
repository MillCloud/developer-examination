/**
 * @desc 对给定对象，返回这个对象的浅 / 深拷贝
 * @desc 对象键只可能是 String，值只可能是 String、Number、Boolean、Undefined、Null、Object
 * @typedef {(string | number | boolean | undefined | null)} BaseType
 * @typedef {Record<string, BaseType | Record<string, BaseType> | BaseType[]>} TObject
 * @param {TObject} object
 * @returns {TObject}
 */
const objectClone = (object) => {};
