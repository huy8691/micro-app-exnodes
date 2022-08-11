import { message, Popconfirm, Table, Button } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { callAPI } from '../../../services/index';
import { AxiosResponse } from 'axios';
import ReactJson from 'react-json-view';

type Props = {
	handleUpdate: (value: string) => void;
};
const ListUser: React.FC<Props> = ({ handleUpdate }) => {
	// data user
	const [data, setData] = useState([]);

	// data poc
	const [dataProc, setDataProc] = useState({});

	// call api delete
	const handleDelete = (id: number): Promise<AxiosResponse> => {
		return callAPI({
			url: `students/${id}`,
			method: 'delete',
		});
	};
	// call api list
	const getList = (): Promise<AxiosResponse> => {
		return callAPI({
			url: `students`,
			method: 'get',
		});
	};

	// call api proc
	const getProc = (): Promise<AxiosResponse> => {
		return callAPI({
			url: `proc`,
			method: 'get',
		});
	};

	// function delete khi xác nhận
	const confirm = (data: any) => {
		console.log(data);
		handleDelete(data)
			.then(function () {
				message.success('Success');
				window.location.reload();
			})
			.catch(function (err) {
				message.error(err);
			});
	};

	// không xác nhận
	const cancel = (e: any) => {
		console.log(e);
		message.error('Click on No');
	};

	// config columns
	const columns = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'First Name',
			dataIndex: 'firstName',
			key: 'firstName',
		},
		{
			title: 'Last Name',
			dataIndex: 'lastName',
			key: 'lastName',
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Code',
			dataIndex: 'code',
			key: 'code',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},

		{
			title: 'Update',
			key: 'update',
			render: (data: any) => (
				<span style={{ cursor: 'pointer' }} onClick={() => handleUpdate(data)}>
					Update
				</span>
			),
		},
		{
			title: 'Delete',
			key: 'delete',
			render: (data: any) => (
				<Popconfirm
					title='Are you sure to delete this?'
					onConfirm={() => confirm(data.id)}
					onCancel={cancel}
					okText='Yes'
					cancelText='No'
				>
					<a href='#'>Delete</a>
				</Popconfirm>
			),
		},
	];

	// hàm call api list
	const handleGetList = useCallback(() => {
		getList()
			.then((res) => {
				const { data } = res.data;
				setData(data);
			})
			.catch(() => {
				message.error('Error');
			});
	}, []);

	// hàm call api proc
	const handleProc = useCallback(() => {
		getProc()
			.then((res) => {
				const { data } = res.data;
				console.log('data', data);
				setDataProc(data);
			})
			.catch(() => {
				message.error('Error');
			});
	}, []);

	// khởi tạo component thì chạy các hàm
	useEffect(() => {
		handleGetList();
		handleProc();
	}, [handleGetList, handleProc]);

	return (
		<>
			<Button type='primary' onClick={handleGetList}>
				Refresh List User
			</Button>
			<Table columns={columns} dataSource={data} />
			<ReactJson src={dataProc} />
		</>
	);
};

export default ListUser;
