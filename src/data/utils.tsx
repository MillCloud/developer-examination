import { Typography } from 'antd';

const { Text } = Typography;

export const utils = [
  {
    header: '对数组元素求和',
    key: 'arraySum',
    content: `/**
 * @desc 对给定数组元素求和，数组元素只可能是 Number
 * @param {Array<number>} array
 * @returns {number} 传入数组的元素之和
 */
const arraySum = (array) => {};

// 测试样例
const array = [-10, 9, -8, 7, -6, 5, 4, 3, 2, 1];
const result = arraySum(array);
console.log('array', array); // [-10, 9, -8, 7, -6, 5, 4, 3, 2, 1]
console.log('result', result); // 7
`,
  },
  {
    header: '对十六进制字符串字符求和',
    key: 'stringSum',
    content: `/**
 * @desc 对给定十六进制字符串求和，字符只可能是十六进制数
 * @param {string} string
 * @returns {number} 十六进制字符串字符之和
 */
const stringSum = (string) => {};

// 测试样例
const string = '925ED673BA';
const result = stringSum(string);
console.log('string', string); // 925ED673BA
console.log('result', result); // 80
`,
  },
  {
    header: '数组去重',
    key: 'arrayDeDuplication',
    content: `/**
 * @desc 对给定数组去重，对于引用类型，做或不做深层次比较都可以
 * @desc 数组元素只可能是 String、Number、Boolean、Undefined、Null、Object、Array
 * @typedef {string | number | boolean | undefined | null} BaseType
 * @param {Array<BaseType | { [propName: string]: BaseType; } | BaseType[]>} array
 * @returns {Array<BaseType | { [propName: string]: BaseType; } | BaseType[]>} 去重后的数组
 */
const arrayDeDuplication = (array) => {};

// 测试样例
const array = [
  '0',
  '0',
  0,
  0,
  true,
  true,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  {},
  {},
  { a: 1, b: 2 },
  { b: 2, a: 1 },
  [],
  [],
  [1, 2],
  [1, 2],
  [2, 1],
  [2, 1],
];
const newArray = arrayDeDuplication(array);
console.log('array', array);
console.log('newArray', newArray);

// 不做深层次比较
// [
//   "0",
//   "0",
//   0,
//   0,
//   true,
//   true,
//   false,
//   false,
//   undefined,
//   undefined,
//   null,
//   null,
//   {},
//   {},
//   { a: 1, b: 2 },
//   { b: 2, a: 1 },
//   [],
//   [],
//   [1, 2],
//   [1, 2],
//   [2, 1],
//   [2, 1],
// ]
// [
//   "0",
//   0,
//   true,
//   false,
//   undefined,
//   null,
//   {},
//   {},
//   { a: 1, b: 2 },
//   { b: 2, a: 1 },
//   [],
//   [],
//   [1, 2],
//   [1, 2],
//   [2, 1],
//   [2, 1],
// ]

// 做深层次比较
// [
//   "0",
//   "0",
//   0,
//   0,
//   true,
//   true,
//   false,
//   false,
//   undefined,
//   undefined,
//   null,
//   null,
//   {},
//   {},
//   { a: 1, b: 2 },
//   { b: 2, a: 1 },
//   [],
//   [],
//   [1, 2],
//   [1, 2],
//   [2, 1],
//   [2, 1],
// ]
// ["0", 0, true, false, undefined, null, {}, { a: 1, b: 2 }, [], [1, 2], [2, 1]]
`,
  },
  {
    header: '去除字符串两边子串',
    key: 'stringTrim',
    content: `/**
 * @desc 对给定的字符串，去除两边的特定子串
 * @param {string} string
 * @param {string} substring
 * @returns {string} 去除子串后的字符串
 */
const stringTrim = (string, substring = ' ') => {};

// 子串为空格的测试样例
const result1 = stringTrim('  abc  ');
console.log('result1', result1); // abc

// 子串为其它字符串的测试样例
const result2 = stringTrim('-_-abc-_--_-', '-_-');
console.log('result2', result2); // abc
`,
  },
  {
    header: (
      <>
        <Text code>Array</Text> 转换成 <Text code>Object</Text>
      </>
    ),
    key: 'arrayToObject',
    content: `/**
 * @desc 把给定的二维数组转换成对象
 * @desc 二维数组每个元素都是一个只有两个元素的数组，第一个元素作为对象的键，第二个元素作为对应键的值
 * @param {[string, string | number][]} array
 * @returns {{ [propName: string]: string | number }} 一个对象
 */
const arrayToObject = (array) => {};

// 测试样例
const array = [
  ['a', 1],
  ['b', '2'],
];
const object = arrayToObject(array);
console.log('array', array); // [['a', 1], ['b', '2']]
console.log('object', object); // { a: 1, b: '2' }
`,
  },
  {
    header: (
      <>
        <Text code>Object</Text> 转换成 <Text code>Array</Text>
      </>
    ),
    key: 'objectToArray',
    content: `/**
 * @desc 把给定的对象转换成二维数组
 * @desc 二维数组每个元素都是一个只有两个元素的数组，第一个元素是对象的键，第二个元素是对应键的值
 * @param {{ [propName: string]: string | number; }} object
 * @returns {[string, string | number][]}一个数组
 */
const objectToArray = (object) => {};

// 测试样例
const object = { a: 1, b: '2' };
const array = objectToArray(object);
console.log('object', object); // { a: 1, b: '2' }
console.log('array', array); // [['a', 1], ['b', '2']]
`,
  },
  {
    header: '生成唯一 id',
    key: 'uniqueId',
    content: `/**
 * @desc 每调用一次，返回一个独特的 id
 * @returns {string}
 */
const uniqueId = (prefix = '') => {};

// 测试样例
console.log('result1', uniqueId()); // 1
console.log('result1', uniqueId('prefix')); // prefix-2
console.log('result', uniqueId()); // 3
`,
  },
  {
    header: '数组拷贝',
    key: 'arrayClone',
    content: `/**
 * @desc 对给定数组，返回这个数组的浅拷贝或深拷贝
 * @desc 数组元素只可能是 String、Number、Boolean、Undefined、Null、Array
 * @typedef {(string | number | boolean | undefined | null)} BaseType
 * @typedef {Array<BaseType | ArrayType>} ArrayType
 * @param {ArrayType} array
 * @returns {Array<BaseType | BaseType[]>} 传入数组的浅拷贝或深拷贝
 */
const arrayClone = (array) => {};
`,
  },
  {
    header: '对象拷贝',
    key: 'objectClone',
    content: `/**
 * @desc 对给定对象，返回这个对象的浅拷贝或深拷贝
 * @desc 对象键只可能是 String，值只可能是 String、Number、Boolean、Undefined、Null、Object
 * @typedef {(string | number | boolean | undefined | null)} BaseType
 * @typedef {{ [propName: string]: BaseType | ObjectType }} ObjectType
 * @param {ObjectType} object
 * @returns 传入对象的浅拷贝或深拷贝
 */
const objectClone = (object) => {};
`,
  },
];
