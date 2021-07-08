import { memo, ReactNode } from 'react';
import { Collapse, Typography, Button } from 'antd';
import Markdown from 'markdown-to-jsx';
import { utils, demos } from '@/data';
import { DownloadOutlined } from '@ant-design/icons';
import fileSaver from 'file-saver';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const ComputerExamination = memo(() => (
  <Typography>
    <Title>工具类</Title>
    <Paragraph>
      你需要使用原生 JavaScript/TypeScript4 给出尽可能简洁的实现。
    </Paragraph>
    <Paragraph>请尽力完成，以便我们更全面地考量你的能力。</Paragraph>
    <Paragraph>
      <Collapse>
        {utils.map((util) => (
          <Panel
            header={util.header}
            key={util.key}
            extra={
              <Button
                shape="circle"
                icon={<DownloadOutlined />}
                onClick={(event) => {
                  event.stopPropagation();
                  fileSaver.saveAs(new Blob([util.content]), `${util.key}.js`);
                }}
              />
            }
          >
            <Markdown>{`~~~javascript
${util.content}
~~~`}</Markdown>
          </Panel>
        ))}
      </Collapse>
    </Paragraph>
    <Title>小项目</Title>
    <Paragraph>
      你需要使用以下其中一种技术栈给出尽可能简洁的代码实现。
    </Paragraph>
    <Paragraph>
      <ul>
        <li>
          <Text code>Vue2 Options API + JavaScript</Text>
        </li>
        <li>
          <Text code>
            Vue2 / Vue3 Composition API + JavaScript / TypeScript
          </Text>
        </li>
        <li>
          <Text code>React17 + Hooks</Text>
        </li>
      </ul>
    </Paragraph>
    <Paragraph>
      在没有具体要求的部分（比如页面设计等），你可以自由发挥。如果题目内没有限制，你可以任意使用你常用的周边库。
    </Paragraph>
    <Paragraph>
      请选择至少 1 个、最多 3 个尽力完成，并写出你实现时的相关思考🤔。
    </Paragraph>
    <Paragraph>
      <Collapse>
        {demos.map((demo) => (
          <Panel header={demo.header} key={demo.key}>
            {demo.content}
          </Panel>
        ))}
      </Collapse>
    </Paragraph>
  </Typography>
));

export default ComputerExamination;
