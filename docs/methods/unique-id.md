# 生成唯一 ID

可传入一个字符串作为前缀 `prefix`，不传入 `prefix` 时 `prefix` 默认为空字符串。返回一个字符串作为唯一 ID。

示例 1：

```text
输入：prefix = ''
输出：'1'

输入：prefix = 'prefix-'
输出：'prefix-1'

输入：prefix = 'prefix'
输出：'prefix1'

输入：prefix = ''
输出：2
```

<a href="./unique-id.ts" download>点击下载 TypeScript 文件</a>

```typescript
function uniqueId(prefix = ''): string {}
```

<a href="./unique-id.js" download>点击下载 JavaScript 文件</a>

```javascript
/**
 * @param {string} prefix
 * @returns {string}
 */
function uniqueId(prefix = '') {}
```
