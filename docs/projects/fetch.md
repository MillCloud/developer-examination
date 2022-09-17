# fetch

- 使用 [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 请求获取相关仓库。
  - 请求 [Github API](https://docs.github.com/en/rest/search) 或 [Gitee API](https://gitee.com/api/v5/swagger#/getV5SearchRepositories)。
  - 关键字使用 `Vue` 或 `React`。
- 使用表格显示仓库。
  - 第一列显示格式为 `${拥有者}/${仓库名}`，点击可打开页面。
  - 第二列显示 `Star` 数。
  - 第三列显示 `Fork` 数。
- 显示当前页和总页数，允许切页查看不同页数据。
- 缓存最近 5 页的数据。
- 可以参考 [axios](https://github.com/axios/axios) 或 [ky](https://github.com/sindresorhus/ky) 的源码。
