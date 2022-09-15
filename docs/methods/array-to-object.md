# 二维数组转换成对象

传入一个二维数组 `array`，数组内所有元素均为数组，第一个元素是字符串或数字，第二个元素不定。返回一个对象，对象的键对应数组内元素的第一个元素，值对应数组内元素的第二个元素。

示例：

```text
输入：array = [[1, 2], [3, 4]]
输出：{ 1: 2, 3: 4 }
```

<a href="./array-to-object.ts" download>点击下载 TypeScript 文件</a>

```typescript
function arrayToObject(array: [string | number, any][]): Record<string | number, any> {}
```

<a href="./array-to-object.js" download>点击下载 JavaScript 文件</a>

```javascript
/**
 * @param {[string | number, any][]} array
 * @returns {Record<string | number, any>}
 */
function arrayToObject(array) {}
```
