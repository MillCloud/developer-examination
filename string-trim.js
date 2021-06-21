/**
 * @desc 对给定的字符串，去除两边的特定子串
 * @param {string} string
 * @param {string} substring
 * @returns {string} 去除子串后的字符串
 */
const stringTrim = (string, substring = " ") => {};

// 子串为空格的测试样例
const result1 = stringTrim("  abc  ");
console.log("result1", result1); // abc

// 子串为其它字符串的测试样例
const result2 = stringTrim("-_-abc-_--_-", "-_-");
console.log("result2", result2); // abc
