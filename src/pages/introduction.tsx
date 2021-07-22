import { memo } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph, Link } = Typography;

const Introduction = memo(() => (
  <Typography>
    <Title>目的</Title>
    <Paragraph>
      我们深知笔试和面试都避开了开发者真正的日常，也就是在熟悉的电脑环境上工作。它们可能会让你非常不习惯，使你的表现不符合你自己的预期。
    </Paragraph>
    <Paragraph>
      因此，我们增加了机试的环节，希望可以在这个环节里更全面更综合地考量你的能力。
    </Paragraph>
    <Paragraph>
      <ul>
        <li>挑选一些我们预设的题目。</li>
        <li>自主完成这些题目。</li>
        <li>记录你完成每一道题目的用时。</li>
        <li>
          完成后放到{' '}
          <Link href="https://github.com" target="_blank">
            Github
          </Link>{' '}
          或者{' '}
          <Link href="https://gitee.com" target="_blank">
            Gitee
          </Link>
          ，并提供访问链接给我们。
        </li>
        <li>
          我们将查看你的代码，根据笔试、面试和机试判断你的能力是否符合我们的要求并告知你。
        </li>
      </ul>
    </Paragraph>
    <Paragraph>
      注意：你可以任意搜索基本资料（
      <Link href="https://cn.vuejs.org/" target="_blank">
        Vue2 官网
      </Link>
      ，
      <Link href="https://v3.cn.vuejs.org/" target="_blank">
        Vue3 官网
      </Link>
      ，
      <Link href="https://zh-hans.reactjs.org/" target="_blank">
        React 官网
      </Link>
      ，
      <Link href="https://developer.mozilla.org/" target="_blank">
        MDN
      </Link>{' '}
      以及你使用到的周边库的文档等）。我们想看到的是你独立思考的结果，如果做不出来，大大方方地承认也好。
    </Paragraph>
    <Paragraph>一经发现抄袭，我们将会直接拒绝你。</Paragraph>
    <Paragraph>
      机试不是必须的环节，你也可以选择不接受机试，那样我们将根据笔试和面试来判断。
    </Paragraph>
  </Typography>
));

export default Introduction;
