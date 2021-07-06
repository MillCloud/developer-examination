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
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
            target="_blank"
          >
            fetch
          </Link>{' '}
          获取 Github Vue / React Topics 的仓库并显示作者、仓库名、Star 和
          Fork。
        </li>
        <li>
          缓存最近使用几页的数据，再次使用时直接读取缓存数据，具体页数可自定义。
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
          <Text code>EventBus.emit</Text>
        </li>
        <li>
          <Text code>EventBus.on</Text>
        </li>
        <li>
          <Text code>EventBus.once</Text>
        </li>
        <li>
          <Text code>EventBus.clear</Text>
        </li>
      </ul>
    ),
  },
  {
    header: '实现一个备忘录',
    key: 'memo',
    content: (
      <ul>
        <li>输入标题和内容添加备忘。</li>
        <li>允许筛选和排序。</li>
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
          <Link
            href="https://baike.baidu.com/item/%E6%89%AB%E9%9B%B7/12543"
            target="_blank"
          >
            扫雷
          </Link>{' '}
          规则。
        </li>
        <li>
          可以选择难度，初级 9x9 10 雷，中级 16x16 40 雷，高级 16x30 99 雷。
        </li>
        <li>允许自定义行、列、雷数量。</li>
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
          <Link
            href="https://baike.baidu.com/item/2048/13383511"
            target="_blank"
          >
            2048
          </Link>{' '}
          规则。
        </li>
        <li>允许最多三次撤回操作。</li>
      </ul>
    ),
  },
  {
    header: '实现一个分割线组件',
    key: 'divider',
    content: (
      <ul>
        <li>
          参考{' '}
          <Link
            href="https://element-plus.org/#/zh-CN/component/divider"
            target="_blank"
          >
            ElementPlus Divider
          </Link>{' '}
          或{' '}
          <Link
            href="https://ant.design/components/divider-cn/"
            target="_blank"
          >
            Ant Design Divider
          </Link>{' '}
          样式和功能实现。你可以看源码，理清思路，自己再实现，但不要对着源码照搬。
        </li>
      </ul>
    ),
  },
  {
    header: '实现一个按钮组件',
    key: 'button',
    content: (
      <ul>
        <li>
          参考{' '}
          <Link
            href="https://element-plus.org/#/zh-CN/component/button"
            target="_blank"
          >
            ElementPlus Button
          </Link>{' '}
          或{' '}
          <Link href="https://ant.design/components/button-cn/" target="_blank">
            Ant Design Button
          </Link>{' '}
          样式和功能实现。你可以看源码，理清思路，自己再实现，但不要对着源码照搬。
        </li>
      </ul>
    ),
  },
  {
    header: '实现一个单选框组件',
    key: 'radio',
    content: (
      <ul>
        <li>
          参考{' '}
          <Link
            href="https://element-plus.org/#/zh-CN/component/radio"
            target="_blank"
          >
            ElementPlus Radio
          </Link>{' '}
          或{' '}
          <Link href="https://ant.design/components/radio-cn/" target="_blank">
            Ant Design Radio
          </Link>{' '}
          样式和功能实现。你可以看源码，理清思路，自己再实现，但不要对着源码照搬。
        </li>
      </ul>
    ),
  },
  {
    header: '实现一个回到顶部组件',
    key: 'back-top',
    content: (
      <ul>
        <li>
          参考{' '}
          <Link
            href="https://element-plus.org/#/zh-CN/component/backtop"
            target="_blank"
          >
            ElementPlus Backtop
          </Link>{' '}
          或{' '}
          <Link
            href="https://ant.design/components/back-top-cn/"
            target="_blank"
          >
            Ant Design Backtop
          </Link>{' '}
          样式和功能实现。你可以看源码，理清思路，自己再实现，但不要对着源码照搬。
        </li>
      </ul>
    ),
  },
];
