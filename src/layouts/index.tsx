import { memo, useMemo } from 'react';
import { Layout as ALayout, Typography, Image, Row, Menu, BackTop, Space } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import pkg from '@/../package.json';
import logoUrl from '@/assets/logo.png';

const { Header, Content, Footer } = ALayout;
const { Title, Link } = Typography;

const routes = [
  {
    path: '/',
    name: 'index',
  },
  {
    path: '/computer-examination',
    name: 'computer-examination',
  },
];

const Layout = memo(({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedKeys = useMemo(
    () => routes.filter((route) => route.path === location.pathname).map((route) => route.name),
    [location],
  );
  return (
    <ALayout className="min-h-screen">
      <Header className="fixed z-10 w-full" style={{ padding: '0 24px' }}>
        <Row align="middle" className="h-full flex-nowrap">
          <a
            href="https://www.millcloud.cn"
            className="flex flex-row items-center flex-none"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={logoUrl} preview={false} alt="MillCloud" className="w-20" />
          </a>
          <Title level={5} className="!text-white !mb-0 mx-4 flex-none">
            前端测试
          </Title>
          <Menu
            theme="dark"
            mode="horizontal"
            className="flex-auto"
            selectedKeys={selectedKeys}
            onClick={({ key }) => {
              navigate(`/${key}`);
            }}
          >
            <Menu.Item key="index">说明</Menu.Item>
            <Menu.Item key="computer-examination">机试</Menu.Item>
          </Menu>
        </Row>
      </Header>
      <Content style={{ marginTop: 64, padding: 24 }}>{children}</Content>
      <Footer>
        <Row justify="center">v{pkg.version}</Row>
        <Row justify="center">
          <Space size="large">
            <Link href={`https://github.com/${pkg.author}/${pkg.name}`} target="_blank">
              Github Repo
            </Link>
            <Link href={`https://gitee.com/${pkg.author}/${pkg.name}`} target="_blank">
              Gitee Repo
            </Link>
            <Link href={`https://${pkg.author}.github.io/${pkg.name}/`} target="_blank">
              Github Page
            </Link>
            <Link href={`https://${pkg.author}.gitee.io/${pkg.name}/`} target="_blank">
              Gitee Page
            </Link>
          </Space>
        </Row>
      </Footer>
      <BackTop />
    </ALayout>
  );
});

export default Layout;
