import { Modal, Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";

const Create: React.FC<{}> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return <div></div>;

  // return (
  //   <div>
  //     <Button type="primary" onClick={showModal}>
  //       Create
  //     </Button>
  //     <Modal
  //       title="Create"
  //       visible={isModalVisible}
  //       onOk={handleOk}
  //       onCancel={handleCancel}
  //     >
  //       <Form
  //         name="basic"
  //         labelCol={{ span: 8 }}
  //         wrapperCol={{ span: 16 }}
  //         initialValues={{ remember: true }}
  //         onFinish={onFinish}
  //         onFinishFailed={onFinishFailed}
  //         autoComplete="off"
  //       >
  //         <Form.Item
  //           label="Username"
  //           name="username"
  //           rules={[{ required: true, message: "Please input your username!" }]}
  //         >
  //           <Input />
  //         </Form.Item>

  //         <Form.Item
  //           label="Password"
  //           name="password"
  //           rules={[{ required: true, message: "Please input your password!" }]}
  //         >
  //           <Input.Password />
  //         </Form.Item>
  //         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  //           <Button type="primary" htmlType="submit">
  //             Submit
  //           </Button>
  //         </Form.Item>
  //       </Form>
  //     </Modal>
  //   </div>
  // );
};

export default Create;
