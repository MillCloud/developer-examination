import { memo, ReactNode } from 'react';
import { Collapse, Typography, Button, Space, Tooltip, Tabs } from 'antd';
import Markdown from 'markdown-to-jsx';
import { Icon } from '@iconify/react';
import fileSaver from 'file-saver';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { utils, demos } from '@/data';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;
const { TabPane } = Tabs;

const Code = ({ className, children }: { className: string; children: ReactNode }) => (
  <SyntaxHighlighter
    language={className?.startsWith('lang-') ? className.replace('lang-', '') : 'text'}
    style={materialDark}
  >
    {children}
  </SyntaxHighlighter>
);

const Pre = ({ children, ...props }: { children: ReactNode }) =>
  // @ts-ignore
  children?.type === 'code' ? (
    // @ts-ignore
    Code(children.props)
  ) : (
    <pre {...props}>{children}</pre>
  );

const ComputerExamination = memo(() => (
  <Typography>
    <Title>工具方法</Title>
    <Paragraph>
      你需要使用原生 JavaScript / TypeScript
      给出尽可能简洁的实现，并为每一个题目提交一个单独的文件。
    </Paragraph>
    <Paragraph>你可以直接下载对应的文件并修改。</Paragraph>
    <Paragraph>请完成所有你会的题目。</Paragraph>
    <Paragraph>
      <Collapse>
        {utils.map((util) => (
          <Panel
            header={util.header}
            key={util.key}
            extra={
              <Space>
                <Tooltip title="获取 JavaScript 文件">
                  <Button
                    shape="circle"
                    icon={<Icon icon="mdi:language-javascript" className="anticon mx-auto" />}
                    onClick={(event) => {
                      event.stopPropagation();
                      fileSaver.saveAs(new Blob([util.content]), `${util.key}.js`);
                    }}
                  />
                </Tooltip>
                <Tooltip title="获取 TypeScript 文件">
                  <Button
                    shape="circle"
                    icon={<Icon icon="mdi:language-typescript" className="anticon mx-auto" />}
                    onClick={(event) => {
                      event.stopPropagation();
                      fileSaver.saveAs(
                        new Blob([util.tsContent ?? util.content]),
                        `${util.key}.ts`,
                      );
                    }}
                  />
                </Tooltip>
              </Space>
            }
          >
            <Tabs centered defaultActiveKey="js">
              <TabPane tab="JavaScript" key="js">
                <Markdown
                  options={{
                    overrides: {
                      pre: Pre,
                    },
                  }}
                >{`~~~javascript
${util.content}
~~~`}</Markdown>
              </TabPane>
              <TabPane tab="TypeScript" key="ts">
                <Markdown
                  options={{
                    overrides: {
                      pre: Pre,
                    },
                  }}
                >{`~~~typescript
${util.tsContent ?? util.content}
~~~`}</Markdown>
              </TabPane>
            </Tabs>
          </Panel>
        ))}
      </Collapse>
    </Paragraph>
    <Title>小型项目</Title>
    <Paragraph>
      你需要使用以下其中一种技术栈给出尽可能简洁的代码实现，并为每一个题目提交一个单独的项目。
    </Paragraph>
    <Paragraph>
      <ul>
        <li>
          <Text code>Vue2 / Vue3 Options API / Composition API</Text>
        </li>
        <li>
          <Text code>React17 + Hooks</Text>
        </li>
      </ul>
    </Paragraph>
    <Paragraph>
      在没有具体要求的部分（比如页面设计等），你可以自由发挥。如果题目内没有限制，你可以任意使用你常用的周边库。
    </Paragraph>
    <Paragraph>请选择至少 1 个、最多 3 个尽力完成，并写出你实现时的相关思考🤔。</Paragraph>
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
