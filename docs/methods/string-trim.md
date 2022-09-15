# 去除字符串两边子串

传入字符串 `string`，可选择传入子串 `substring`，不传入 `substring` 时 `substring` 默认为一个空格。返回去除 `string` 两边的 `substring` 的字符串。不能直接修改传入的参数。

示例 1：

```text
输入：string = ' abc  '
输出：'abc'
```

示例 2：

```text
输入：string = '-_-abc-_--_-', substring = '-_-'
输出：'abc'
```

示例 3：

```text
输入：string = '-_-abc-_--_-', substring = '-'
输出：'_-abc-_--_'
```

<a href="./string-trim.ts" download>点击下载 TypeScript 文件</a>

```typescript
function stringTrim(string: string, substring = ' '): string {}
```

<a href="./string-trim.js" download>点击下载 JavaScript 文件</a>

```javascript
/**
 * @param {string} string
 * @param {string} substring
 * @returns {string}
 */
function stringTrim(string, substring = ' ') {}
```
