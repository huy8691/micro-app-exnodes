import { Space, Table, Tag, message, Popconfirm } from "antd";
import React from "react";
const confirm = (e: any) => {
  console.log(e);
  message.success("Click on Yes");
};
const cancel = (e: any) => {
  console.log(e);
  message.error("Click on No");
};

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

type Props = {
  handleUpdate: () => void;
};

const List: React.FC<Props> = ({ handleUpdate }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
    },
    {
      title: "Update",
      key: "update",
      render: () => <span onClick={handleUpdate}>Update</span>,
    },
    {
      title: "Delete",
      key: "delete",
      render: () => (
        <Popconfirm
          title="Are you sure to delete this?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Delete</a>
        </Popconfirm>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default List;
