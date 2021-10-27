import { Typography } from 'antd';

const { Text, Link } = Typography;

export const demos = [
  {
    header: (
      <>
        使用 <Text code>fetch</Text> 分页获取特定仓库
      </>
    ),
    key: 'fetch',
    content: (
      <ul>
        <li>
          使用{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">
            fetch
          </Link>{' '}
          请求{' '}
          <Link
            href="https://docs.github.com/cn/rest/reference/search#search-repositories"
            target="_blank"
          >
            Github API
          </Link>{' '}
          或{' '}
          <Link href="https://gitee.com/api/v5/swagger#/getV5SearchRepositories" target="_blank">
            Gitee API
          </Link>{' '}
          获取 <Text code>Vue</Text> 或 <Text code>React</Text> 相关仓库并显示拥有者、仓库名、Star
          和 Fork。
        </li>
        <li>分页功能：显示当前页和总页数，允许切页查看不同页的数据。</li>
        <li>
          缓存功能：缓存最近使用几页的数据，再次使用时直接读取缓存数据，具体页数可自定义，默认为 5。
        </li>
        <li>
          参考：
          <Link href="https://next-fetch-demo.vercel.app" target="_blank">
            next-fetch-demo
          </Link>
        </li>
      </ul>
    ),
  },
  {
    header: (
      <>
        实现一个 <Text code>EventBus</Text>
      </>
    ),
    key: 'event-bus',
    content: (
      <ul>
        <li>
          <Text code>EventBus.emit</Text>：发布事件
        </li>
        <li>
          <Text code>EventBus.on</Text>：监听某个事件
        </li>
        <li>
          <Text code>EventBus.once</Text>：只监听某个事件一次
        </li>
        <li>
          <Text code>EventBus.off</Text>：取消监听某个事件
        </li>
        <li>
          可以用 <Text code>*</Text> 表示所有事件
        </li>
        <li>
          参考：
          <Link href="https://github.com/developit/mitt" target="_blank">
            mitt
          </Link>
        </li>
      </ul>
    ),
  },
  {
    header: '实现一个备忘录',
    key: 'memo',
    content: (
      <ul>
        <li>输入标题、备注和优先级添加备忘。</li>
        <li>允许筛选标题或内容。</li>
        <li>自动根据优先级排序</li>
        <li>
          参考：
          <Link href="https://vue-memos-demo.vercel.app" target="_blank">
            vue-memos-demo
          </Link>
        </li>
      </ul>
    ),
  },
  {
    header: '实现一个扫雷游戏',
    key: 'mine-sweeper',
    content: (
      <ul>
        <li>
          满足{' '}
          <Link href="https://baike.baidu.com/item/%E6%89%AB%E9%9B%B7/12543" target="_blank">
            扫雷
          </Link>{' '}
          规则。
        </li>
        <li>可以选择难度，初级 9x9 10 雷，中级 16x16 40 雷，高级 16x30 99 雷。</li>
        <li>可以自定义难度，即允许自定义行、列、雷数量。</li>
        <li>
          参考：
          <Link href="https://next-mine-sweeper-demo.vercel.app" target="_blank">
            next-mine-sweeper-demo
          </Link>
        </li>
      </ul>
    ),
  },
  {
    header: '实现一个俄罗斯方块游戏',
    key: 'tetris',
    content: (
      <ul>
        <li>
          满足{' '}
          <Link
            href="https://baike.baidu.com/item/%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97/535753"
            target="_blank"
          >
            俄罗斯方块
          </Link>{' '}
          规则。
        </li>
        <li>下落速度应随游玩时间逐渐加快。</li>
        <li>允许自定义初始下落速度、行、列。</li>
        <li>方块要有多种颜色。</li>
        <li>
          参考：
          <Link href="https://binaryify.github.io/vue-tetris/" target="_blank">
            vue-tetris
          </Link>
          ，
          <Link href="https://chvin.github.io/react-tetris/" target="_blank">
            react-tetris
          </Link>
        </li>
      </ul>
    ),
  },
  {
    header: '实现一个 2048 游戏',
    key: '2048',
    content: (
      <ul>
        <li>
          满足{' '}
          <Link href="https://baike.baidu.com/item/2048/13383511" target="_blank">
            2048
          </Link>{' '}
          规则。
        </li>
        <li>允许最多三次撤回操作。</li>
        <li>
          参考：
          <Link href="https://pengfu.github.io/vue-2048/" target="_blank">
            vue-2048
          </Link>
          ，
          <Link href="http://ivanvergiliev.github.io/2048-react/" target="_blank">
            react-2048
          </Link>
        </li>
      </ul>
    ),
  },
  {
    header: '实现一个按钮组件',
    key: 'button',
    content: (
      <ul>
        <li>7 种类型：默认、主要、成功、警告、危险、信息、文字。</li>
        <li>3 种尺寸：默认、小、大。</li>
        <li>3 种形状：默认、胶囊、圆形。</li>
        <li>2 种状态：可用、不可用。</li>
        <li>
          可参考{' '}
          <Link href="https://getbootstrap.com/docs/5.1/components/buttons/" target="_blank">
            bootstrap v5 button
          </Link>
          ，
          <Link href="https://element-plus.org/#/zh-CN/component/button" target="_blank">
            element-plus button
          </Link>{' '}
          和{' '}
          <Link href="https://ant.design/components/button-cn/" target="_blank">
            antd button
          </Link>{' '}
          样式。
        </li>
      </ul>
    ),
  },
];
