import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { QUERY_ENVELOPES } from "../utils/queries";
import Envcard from "./Envcard";

const { Sider } = Layout;

function SideMenu() {
  const { loading, data } = useQuery(QUERY_ENVELOPES);
  const envelope = data?.envelopes || [];
  const [envelopeName, setEnvelopeName] = useState("");
  const [envelopeBalance, setEnvelopeBalance] = useState("");

  const handleClick = (event) => () => {
    setEnvelopeName(event.name);
    setEnvelopeBalance(event.envBalance);
  };

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
            onClick={handleClick(envelope)}
            style={{ color: "black" }}
          >
            {envelope.name}{" "}
          </Menu.Item>
        ))}
      </Menu>
      <Envcard name={envelopeName} balance={envelopeBalance} />
    </Sider>
  );
}

export default SideMenu;
