import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

const Banner = ({ drawerHeight }) => (
  <Content
    className="main-aria"
    style={{
      marginTop: drawerHeight,
      transition: "margin-top 0.3s ease",
    }}
  >
    <h1 className="title">{"白頭翁 (Chinese bulbul)"}</h1>
    <h2 className="Subtitle">
      {
        "又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。"
      }
    </h2>
  </Content>
);

export default Banner;
