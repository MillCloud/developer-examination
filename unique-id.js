/**
 * @desc 每调用一次，返回一个独特的 id
 * @returns {string}
 */
const uniqueId = (prefix = "") => {};

// 测试样例
console.log("result1", uniqueId()); // 1
console.log("result1", uniqueId("prefix")); // prefix-2
console.log("result", uniqueId()); // 3
