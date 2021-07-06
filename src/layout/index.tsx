import { memo, useMemo } from 'react';
import { Layout as ALayout, Typography, Image, Row, Menu } from 'antd';
import logoUrl from '@/assets/logo.png';
import { useHistory, useLocation } from 'react-router-dom';

const { Header, Content } = ALayout;

const routes = [
  {
    path: '/introduction',
    name: 'introduction',
  },
  {
    path: '/computer-examination',
    name: 'computer-examination',
  },
];

const Layout = memo(({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const selectedKeys = useMemo(
    () =>
      routes
        .filter((route) => route.path === location.pathname)
        .map((route) => route.name),
    [location],
  );
  return (
    <ALayout className="min-h-screen">
      <Header className="fixed z-1 w-full">
        <Row align="middle" className="h-full">
          <a
            href="https://www.millcloud.cn"
            className="flex flex-row items-center"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={logoUrl} preview={false} alt="MillCloud" />
          </a>
          <Typography.Title level={3} className="!text-white !mb-0 mx-4">
            前端测试
          </Typography.Title>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            onClick={({ key }) => {
              history.push(`/${key}`);
            }}
          >
            <Menu.Item key="introduction">初衷</Menu.Item>
            <Menu.Item key="computer-examination">机试</Menu.Item>
          </Menu>
        </Row>
      </Header>
      <Content style={{ marginTop: 64, padding: 50 }}>{children}</Content>
    </ALayout>
  );
});

export default Layout;
