import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
import React from "react";
import List from "./parts/List";
import Create from "./parts/Create";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  const handleUpdate = () => {
    console.log("handle");
  };
  return (
    <>
      <Layout>
        <Layout>
          <Sider>
            <Menu>
              <Menu.Item>List</Menu.Item>
              <Menu.Item>Create</Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Create />
            <List handleUpdate={handleUpdate} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
