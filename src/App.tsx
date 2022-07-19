import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import Create from './parts/Create';
import Update from './parts/Update';
import List from './parts/List';

const App: React.FC = () => {
	const { Sider, Content } = Layout;
	const [data, setData] = useState({});
	const handleUpdate = (value: any) => {
		console.log('handle', value);
		setData(value);
	};
	return (
		<Layout>
			<Layout>
				<Sider>
					<Menu>
						<Menu.Item>List</Menu.Item>
					</Menu>
				</Sider>
				<Content>
					<div style={{ margin: '30px' }}>
						<Create />
						<Update data={data} />
					</div>
					<div style={{ padding: '0px 30px 30px 30px', minHeight: '100vh' }}>
						<List handleUpdate={handleUpdate} />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;
