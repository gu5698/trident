import React, { useState } from "react";
import { Button, Layout, theme, Drawer } from "antd";
import { RiCloseLargeLine, RiMenu2Fill } from "react-icons/ri";
import MenuComponent from "../components/MenuComponent.jsx"; // 引入 MenuComponent
import Logo from "../components/Logo.jsx"; // 引入 MenuComponent

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { key: "1", label: "白頭翁的特性", path: "/feature" },
  { key: "2", label: "白頭翁的故事", path: "/story" },
  { key: "3", label: "白頭翁的美照", path: "/photos" },
  { key: "4", label: "白頭翁的危機", path: "/crisis" },
];

const DefaultLayout = ({ children, setDrawerHeight }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleDrawerOpen = () => {
    setVisible(true);
    setDrawerHeight(200);
  };

  const handleDrawerClose = () => {
    setDrawerHeight(0);
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={345} breakpoint="xl" collapsedWidth="0" trigger={null}>
        <div className="site-name">
          {import.meta.env.VITE_SITE_NAME}
          <Logo />
        </div>
        <MenuComponent items={items} /> {/* 使用 MenuComponent */}
      </Sider>
      <Layout style={{ width: "100%" }}>
        <Header
          style={{
            boxShadow: collapsed ? "" : "0px 4px 4px 0px #00000040",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <RiCloseLargeLine /> : <RiMenu2Fill />}
            onClick={() => {
              collapsed ? handleDrawerClose() : handleDrawerOpen();
              setCollapsed(!collapsed);
            }}
            style={{ fontSize: "32px", width: 64, height: 64 }}
          />
          <p className="site-name">{import.meta.env.VITE_SITE_NAME}</p>
          <Logo />
        </Header>
        {children}
      </Layout>

      <Drawer
        title={import.meta.env.VITE_SITE_NAME}
        placement="top"
        onClose={handleDrawerClose}
        open={visible}
        width={300}
        height={286.43}
        mask={false}
      >
        <MenuComponent items={items} /> {/* 使用 MenuComponent */}
      </Drawer>
    </Layout>
  );
};

export default DefaultLayout;
