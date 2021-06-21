/**
 * @desc 对给定对象，返回这个对象的浅拷贝或深拷贝
 * @desc 对象键只可能是 String，值只可能是 String、Number、Boolean、Undefined、Null、Object、Array
 * @param {{ [propName: string]: string | number | boolean | undefined | null | { [propName: string]: any; } | any[] }} array
 * @returns 传入对象的浅拷贝或深拷贝
 */
const objectClone = (object) => {};

// 浅拷贝测试样例
const object = { a: "0", b: {} };
const newObject = objectClone(object);
console.log("object", JSON.parse(JSON.stringify(object))); // { a: "0", b: {} }
console.log("newObject", JSON.parse(JSON.stringify(newObject))); // { a: "0", b: {} }
object.a = "1";
console.log("object", JSON.parse(JSON.stringify(object))); // { a: "1", b: {} }
console.log("newObject", JSON.parse(JSON.stringify(newObject))); // { a: "0", b: {} }
object.b.c = true;
console.log("object", JSON.parse(JSON.stringify(object))); // { a: "1", b: { c: true } }
console.log("newObject", JSON.parse(JSON.stringify(newObject))); // { a: "0", b: { c: true } }

// 深拷贝测试样例
const object = { a: "0", b: {} };
const newObject = arrayClone(array);
console.log("object", JSON.parse(JSON.stringify(object))); // { a: "0", b: {} }
console.log("newObject", JSON.parse(JSON.stringify(newObject))); // { a: "0", b: {} }
object.a = "1";
console.log("object", JSON.parse(JSON.stringify(object))); // { a: "1", b: {} }
console.log("newObject", JSON.parse(JSON.stringify(newObject))); // { a: "0", b: {} }
object.b.c = true;
console.log("object", JSON.parse(JSON.stringify(object))); // { a: "1", b: { c: true } }
console.log("newObject", JSON.parse(JSON.stringify(newObject))); // { a: "0", b: {} }
