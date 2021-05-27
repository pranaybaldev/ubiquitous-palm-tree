import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
import StepsFlow from './components/Steps'

const { Header, Content, Footer, Sider } = Layout;

export default function AppLayout(props) {
	return (
		<>
			<Layout style={{ height: "100vh" }}>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onBreakpoint={broken => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}
				>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
						<Menu.Item key="1" icon={<UserOutlined />}>
							nav 1
        		</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
					<Content style={{ margin: '24px 16px 0' }}>
						<div className="site-layout-background" style={{ padding: 24, minHeight: "80vh" }}>
							<StepsFlow />
        		</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>👻</Footer>
				</Layout>
			</Layout>
		</>
	);
}