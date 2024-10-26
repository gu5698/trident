import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const MenuComponent = ({ items }) => {
  // 將 items 轉換為 Menu.Item 的格式
  const menuItems = items.map((item) => ({
    key: item.key,
    label: <Link to={item.path}>{item.label}</Link>, // 使用 Link 組件設置路由
  }));

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={menuItems}
    ></Menu>
  );
};

export default MenuComponent;
