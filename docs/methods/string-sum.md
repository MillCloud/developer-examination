# 十六进制字符串字符求和

传入一个字符串 `string`，字符串内所有字符均为十六进制表示。返回字符串内所有字符之和，以十进制表示。

示例：

```text
输入：string = 'fedCBA9876543210'
输出：120
解释
f 对应 15，e 对应 14，d 对应 13，C 对应 12，B 对应 11，A 对应 10
15 + 14 + 13 + 12 + 11 + 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0 = 120
```

<a href="./string-sum.ts" download>点击下载 TypeScript 文件</a>

```typescript
function stringSum(string: string): number {}
```

<a href="./string-sum.js" download>点击下载 JavaScript 文件</a>

```javascript
/**
 * @param {string} string
 * @returns {number}
 */
function stringSum(string) {}
```
