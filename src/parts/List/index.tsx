import { message, Popconfirm, Table, Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { callAPI } from "../../services";
import { AxiosResponse } from "axios";
import ReactJson from "react-json-view";

type Props = {
  handleUpdate: (value: string) => void;
};
const List: React.FC<Props> = ({ handleUpdate }) => {
  const [data, setData] = useState([]);
  const [dataProc, setDataProc] = useState({});
  const handleDelete = (id: number): Promise<AxiosResponse> => {
    return callAPI({
      url: `students/${id}`,
      method: "delete",
    });
  };
  const getList = (): Promise<AxiosResponse> => {
    return callAPI({
      url: `students`,
      method: "get",
    });
  };
  const getProc = (): Promise<AxiosResponse> => {
    return callAPI({
      url: `proc`,
      method: "get",
    });
  };

  const confirm = (data: any) => {
    console.log(data);
    handleDelete(data)
      .then(function () {
        message.success("Success");
        window.location.reload();
      })
      .catch(function (err) {
        message.error(err);
      });
  };
  const cancel = (e: any) => {
    console.log(e);
    message.error("Click on No");
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Update",
      key: "update",
      render: (data: any) => (
        <span style={{ cursor: "pointer" }} onClick={() => handleUpdate(data)}>
          Update
        </span>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (data: any) => (
        <Popconfirm
          title="Are you sure to delete this?"
          onConfirm={() => confirm(data.id)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Delete</a>
        </Popconfirm>
      ),
    },
  ];
  const handleGetList = useCallback(() => {
    getList()
      .then((res) => {
        const { data } = res.data;
        setData(data);
      })
      .catch(() => {
        message.error("Error");
      });
  }, []);
  const handleProc = useCallback(() => {
    getProc()
      .then((res) => {
        const { data } = res.data;
        console.log("data", data);
        setDataProc(data);
      })
      .catch(() => {
        message.error("Error");
      });
  }, []);
  useEffect(() => {
    handleGetList();
    handleProc();
  }, [handleGetList, handleProc]);

  return (
    <>
      <Button type="primary" onClick={handleGetList}>
        Refresh List
      </Button>
      <Table columns={columns} dataSource={data} />
      <ReactJson src={dataProc} />
    </>
  );
};

export default List;
