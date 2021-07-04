import React, { Component } from "react";
import { useQuery } from "@apollo/client";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { QUERY_ENVELOPES, QUERY_SINGLE_USER } from "../utils/queries";
// import "./App.css";
import { render } from "react-dom";

const { Sider } = Layout;
// const { SubMenu } = Menu;

function SideMenu() {
  //   const { userData } = useQuery(QUERY_SINGLE_USER);
  //   const user = data?.singleUser || [];
  const { loading, data } = useQuery(QUERY_ENVELOPES);
  const envelope = data?.envelopes || [];

  const getName = () => {}
  return (
    <Sider
      className="sider"
      style={{
        minHeight: "100vh",

        textAlign: "center",
        marginLeft: "10px",
      }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <Menu
        className="siderMenu"
        mode="inline"
        style={{ height: "100%", borderRight: "20px", background: "#d8dfe5" }}
      >
        {envelope.map((envelope, i) => (
          <Menu.Item
            key={i}
            onClick={""}
            onDeselect={""}
            style={{ color: "black" }}
          >
            {envelope.name}{" "}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default SideMenu;
