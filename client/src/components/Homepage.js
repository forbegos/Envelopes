import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ENVELOPES } from "../utils/queries";
import Register from "../Register";
import Login from "../Login";
import Envcard from "./Envcard";
import "antd/dist/antd.css";
import Auth from "../utils/auth";

import { Layout, Menu, Button } from "antd";
const { Sider, Content } = Layout;

function HomePage() {
  const { data } = useQuery(QUERY_ENVELOPES);
  const envelope = data?.envelopes || [];
  console.log(envelope);

  const [envelopeName, setEnvelopeName] = useState("");
  const [envelopeBalance, setEnvelopeBalance] = useState("");

  const handleFormSubmit = (e) => () => {
    setEnvelopeName(e.name);
    setEnvelopeBalance(e.envBalance);
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <>
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
            <Menu>
              {envelope.map(
                (env, key) => (
                  (key = { key }),
                  (
                    <Button
                      type="primary"
                      onClick={handleFormSubmit(env)}
                      block
                    >
                      {env.name}
                    </Button>
                  )
                )
              )}
            </Menu>
          </Sider>
          <Layout>
            <Content className="content">
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/">
                <Envcard name={envelopeName} balance={envelopeBalance} />
              </Route>
            </Content>
          </Layout>
        </>
      ) : (
        <>
          <Link to="/login">You are not logged in! Press here to start</Link>
        </>
      )}
    </>
  );
}

export default HomePage;
