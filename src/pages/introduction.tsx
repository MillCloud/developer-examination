import { memo } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const Introduction = memo(() => (
  <Typography>
    <Title>目的</Title>
    <Paragraph>
      我们深知笔试和面试都避开了开发者真正的日常，也就是在电脑上工作。它们可能会让你非常不习惯，表现不符合你自己的预期。因此，我们增加了机试的环节，希望可以更全面更综合地看到你的能力。
    </Paragraph>
    <Paragraph>
      <ul>
        <li>挑选一些我们预设的题目。</li>
        <li>自主完成这些题目。</li>
        <li>记录你完成每一道题目的用时。</li>
        <li>
          完成后放到{' '}
          <Link to="https://github.com" component={Typography.Link}>
            Github
          </Link>{' '}
          或者{' '}
          <Link to="https://gitee.com" component={Typography.Link}>
            Gitee
          </Link>
          ，并提供访问链接给我们。
        </li>
        <li>
          我们将查看你的代码，根据笔试、面试和机试判断你的能力是否符合我们的要求并通知你。
        </li>
      </ul>
    </Paragraph>
    <Paragraph>
      注意：你可以任意搜索基本资料（
      <Link to="https://cn.vuejs.org/" component={Typography.Link}>
        Vue2 官网
      </Link>
      ，
      <Link to="https://v3.cn.vuejs.org/" component={Typography.Link}>
        Vue3 官网
      </Link>
      ，
      <Link to="https://zh-hans.reactjs.org/" component={Typography.Link}>
        React 官网
      </Link>
      ，
      <Link to="https://developer.mozilla.org/" component={Typography.Link}>
        MDN
      </Link>
      等）。我们想看到的是你独立思考的结果，哪怕是做不出来，大大方方地承认也好。
      <Text strong>一经发现抄袭，我们将会直接拒绝你。</Text>
    </Paragraph>
    <Paragraph>
      机试不是必须的环节，你也可以选择不接受机试，那样我们将根据笔试和面试来判断。
    </Paragraph>
    <Title>工具类</Title>
    <Paragraph>
      理论上，它们每一个都不会耗费你太多的时间。我们鼓励尽力完成所有题目，以便我们更全面地考量你的能力。
    </Paragraph>
    <Paragraph>
      你需要使用原生 JavaScript/TypeScript4 给出尽可能简洁的实现。
    </Paragraph>
    <Paragraph>
      <ul>
        <li>对数组元素求和</li>
        <li>对十六进制字符串字符求和</li>
        <li>数组去重</li>
        <li>去除字符串两边子串</li>
        <li>
          <Text code>Array</Text> 转换成 <Text code>Object</Text>
        </li>
        <li>
          <Text code>Object</Text> 转换成 <Text code>Array</Text>
        </li>
        <li>生成唯一 id</li>
        <li>数组拷贝</li>
        <li>对象拷贝</li>
      </ul>
    </Paragraph>
    <Title>小项目</Title>
    <Paragraph>
      请选择至少 1
      个完成。理论上，它们每一个都会耗费你比较多的时间。我们鼓励你最多完成 3
      个，以便我们更全面地考量你的能力。
    </Paragraph>
    <Paragraph>
      你需要使用 <Text code>Vue2</Text>/<Text code>Vue3</Text>/
      <Text code>React17</Text>
      的最新版本给出尽可能简洁的实现。如果题目内没有限制，你可以任意使用你常用的周边库。
    </Paragraph>
    <Paragraph>
      <ul>
        <li>
          使用 <Text code>Fetch</Text> 分页获取特定仓库
        </li>
        <li>
          实现一个 <Text code>EventBus</Text>
        </li>
        <li>实现一个待办清单</li>
        <li>实现一个扫雷游戏</li>
        <li>实现一个俄罗斯方块游戏</li>
        <li>设计一个分割线组件</li>
        <li>设计一个按钮组件</li>
        <li>设计一个输入框组件</li>
        <li>设计一个单选框组件</li>
        <li>设计一个多选框组件</li>
        <li>设计一个加载中组件</li>
        <li>设计一个回到顶部组件</li>
      </ul>
    </Paragraph>
  </Typography>
));

export default Introduction;
