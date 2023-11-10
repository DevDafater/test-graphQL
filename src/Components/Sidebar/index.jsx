import React, { useEffect, useState } from "react";
import {
  HomeOutlined,
  PieChartOutlined,
  AreaChartOutlined,
  FileImageOutlined,
  VideoCameraOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme } from "antd";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
const { Sider, Content } = Layout;
const App = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const [page, setPage] = useState("2")
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    switch (window.location.pathname) {
      case "/user-analysis":
        setPage("2");
        break;
      default:
        setPage("2");
        break;
    }
  }, [page])
  return (
    <div className="relative">
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="hidden lg:block"
        >
          <div className="fixed top-0 left-0 z-50">
            <Menu
              theme="dark"
              mode="inline"
              className="min-h-screen relative z-50"
              defaultSelectedKeys={[page]}
              items={[
                {
                  key: "0",
                  icon: (
                    <div className="flex items-center justify-center">
                      <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                          <span className="sr-only">Your Company</span>
                          <img
                            className="h-8 w-auto"
                            src="https://app.fireflies.ai/img/logo.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  ),
                  label: "Test Task",
                },
                {
                  key: "1",
                  icon: (
                    <Link to="/">
                      <HomeOutlined />
                    </Link>
                  ),
                  label: "Home",
                },
                {
                  key: "2",
                  icon: (
                    <Link to="/user-analysis">
                      <PieChartOutlined />
                    </Link>
                  ),
                  label: "User Analysis",
                },
              ]}
            />
          </div>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "12px 16px",
              padding: 12,
              minHeight: 280,
              background: colorBgContainer,
            }}
            className="overflow-x-scroll"
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <div className="flex justify-center lg:hidden">
        <div className="fixed bottom-2 py-2 max-w-[50vh] z-50 rounded-full drop-shadow-xl flex justify-evenly bg-[#001529] text-teal-300">
          <Link to="/" className="focus:-translate-y-4 focus:bg-white w-[45px] h-[35px] flex justify-center items-center rounded-b-full transition-all text-center ">
            <HomeOutlined />
          </Link>
          <Link to="/user-analysis" className="focus:-translate-y-4 focus:bg-white focus:!text-[#001529] w-[45px] h-[35px] flex justify-center items-center rounded-b-full transition-all text-center ">
            <PieChartOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default App;
