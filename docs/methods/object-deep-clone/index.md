# 对象深拷贝

传入一个对象 `object`，对象的键是 `string` 或 `number` 类型，值类型不定。返回一个键值一致的对象，但修改这个新对象不会影响原对象 `object`。

示例：

```text
输入：object = { 1: 1, 2: 'a', 3: true, 4: undefined, 5: null, 6: { a: 'a' }, 7: [1, 2, 3] }
输出：{ 1: 1, 2: 'a', 3: true, 4: undefined, 5: null, 6: { a: 'a' }, 7: [1, 2, 3] }
```

<a href="./index.ts" download="object-deep-clone.ts">点击下载 TypeScript 文件</a>

```typescript
function objectDeepClone<T = Record<string | number, any>>(object: T): T {}

export { objectDeepClone };
```

<a href="./index.js" download="object-deep-clone.js">点击下载 JavaScript 文件</a>

```javascript
/**
 * @param {Record<string | number, any>} object
 * @returns {Record<string | number, any>}
 */
function objectDeepClone(object) {}

export { objectDeepClone };
```
