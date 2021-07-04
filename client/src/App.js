import React, { Component } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useParams, Link } from "react-router-dom";
// import { Provider } from "react-redux";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import { QUERY_ENVELOPES } from "./utils/queries";

// import store from "./store";
import Navbar from "./Navbar";
// import Landing from "./layout/Landing";
import Register from "./Register";
import Login from "./Login";
import Envcard from "./components/Envcard";
import SideMenu from "./components/SideMenu";
import { fixControlledValue } from "antd/lib/input/Input";
import { render } from "react-dom";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header className="header" style={{ textAlign: "right" }}>
            <Menu className="headerMenu" theme="dark" mode="horizontal">
              <div className="navLinks">
                {/* <Route exact path="/" component={SideMenu} /> */}
                {/* <Route exact path="/register" component={Register} /> */}
              </div>
            </Menu>
          </Header>

          <Layout>
            <Layout>
              <Content className="content">
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
              </Content>
            </Layout>
          </Layout>

          <Footer className="footer" style={{ textAlign: "center" }}>
            FOOTER
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}
export default App;
