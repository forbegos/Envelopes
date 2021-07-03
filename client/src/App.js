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
import Cards from "./components/cards";
import SideMenu from "./components/SideMenu";
import { fixControlledValue } from "antd/lib/input/Input";
import { render } from "react-dom";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header className="header" style={{ textAlign: "right" }}>
            <Menu className="headerMenu" theme="dark" mode="horizontal">
              <div className="navLinks">
                {/* <Route exact path="/" component={Landing} /> */}
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </div>
            </Menu>
          </Header>

          <Layout>
            <SideMenu />
            <Layout>
              <Content className="content">
                <Cards />
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
