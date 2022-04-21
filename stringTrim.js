/**
 * @desc 去除给定字符串两边的特定子串，子串不会含有需要转义的字符，不能改变原字符串
 * @param {string} string
 * @param {string} substring
 * @returns {string}
 */
const stringTrim = (string, substring = ' ') => {};

// 测试样例
// const result1 = stringTrim('  abc  ');
// console.log('result1', result1); // abc
// const result2 = stringTrim('-_-abc-_--_-', '-_-');
// console.log('result2', result2); // abc
// const result3 = stringTrim('-_-abc-_--_-', '-');
// console.log('result3', result3); // _-abc-_--_
