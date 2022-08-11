import { Layout, Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';

// student
import Create from './pages/students/Create';
import Update from './pages/students/Update';
import List from './pages/students/List';

// user
import CreateUser from './pages/user/Create';
import UpdateUser from './pages/user/Update';
import ListUser from './pages/user/List';

const { TabPane } = Tabs;

const App: React.FC = () => {
	const { Content } = Layout;
	const [data, setData] = useState({});
	const [dataUser, setDataUser] = useState({});
	const onChange = (key: string) => {
		console.log(key);
	};
	const handleUpdate = (value: any) => {
		setData(value);
	};
	const handleUpdateUser = (value: any) => {
		setDataUser(value);
	};
	return (
		<Layout>
			<Layout>
				<Tabs defaultActiveKey='1' onChange={onChange} tabPosition='left'>
					<TabPane tab='Student' key='1'>
						<h2 style={{ textAlign: 'center' }}>Student</h2>
						<Content>
							<div style={{ margin: '30px', padding: '20px' }}>
								<Create />
								<Update data={data} />
							</div>
							<div
								style={{ padding: '0px 30px 30px 30px', minHeight: '100vh' }}
							>
								<List handleUpdate={handleUpdate} />
							</div>
						</Content>
					</TabPane>
					<TabPane tab='User' key='2'>
						<div style={{ background: '#ddd' }}>
							<h2 style={{ textAlign: 'center', padding: '20px' }}>User</h2>
							<Content>
								<div style={{ margin: '30px' }}>
									<CreateUser />
									<UpdateUser data={dataUser} />
								</div>
								<div
									style={{ padding: '0px 30px 30px 30px', minHeight: '100vh' }}
								>
									<ListUser handleUpdate={handleUpdateUser} />
								</div>
							</Content>
						</div>
					</TabPane>
				</Tabs>
			</Layout>
		</Layout>
	);
};

export default App;
