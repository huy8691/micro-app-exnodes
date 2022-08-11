import { Modal, Button, Form, Input, InputNumber, message } from 'antd';
import React, { useState } from 'react';
import { callAPI } from '../../../services';
import { AxiosResponse } from 'axios';

const CreateUser: React.FC<{}> = () => {
	// api
	const create = (data: any): Promise<AxiosResponse> => {
		return callAPI({
			url: `students`,
			method: 'post',
			data: data,
		});
	};

	// trạng thái tắt mở popup
	const [isModalVisible, setIsModalVisible] = useState(false);

	// mở popup
	const showModal = () => {
		setIsModalVisible(true);
	};

	// mở popup
	const handleOk = () => {
		setIsModalVisible(false);
	};

	// tắt popup
	const handleCancel = () => {
		setIsModalVisible(false);
	};

	// xác nhận form để call api
	const onFinish = (values: any) => {
		create(values)
			.then(function () {
				message.success('Success');
				setIsModalVisible(false);
				window.location.reload();
			})
			.catch(function (err) {
				message.error(err);
			});
	};

	// data từ form bị sai
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div>
			<Button type='primary' onClick={showModal}>
				Create User
			</Button>
			<Modal
				title='Create User'
				visible={isModalVisible}
				footer={null}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Form
					name='basic'
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Form.Item
						label='First Name'
						name='firstName'
						rules={[
							{ required: true, message: 'Please input your first name!' },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label='Last Name'
						name='lastName'
						rules={[
							{ required: true, message: 'Please input your last name!' },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label='Age'
						name='age'
						rules={[{ required: true, message: 'Please input your age!' }]}
					>
						<InputNumber min={1} />
					</Form.Item>
					<Form.Item
						label='Address'
						name='address'
						rules={[{ required: true, message: 'Please input your address!' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label='Code'
						name='code'
						rules={[{ required: true, message: 'Please input your code!' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default CreateUser;
