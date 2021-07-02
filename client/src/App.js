import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.css";

// import store from "./store";
import Navbar from "./Navbar";
// import Landing from "./layout/Landing";
import Register from "./Register";
import Login from "./Login";
import Cards from "./components/cards";
import { fixControlledValue } from "antd/lib/input/Input";
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
            <Sider
              // width={100}
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
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: "20px" }}
              >
                <SubMenu key="sub1" title="Envelope1">
                  <Menu.Item key="1">option1</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Envelope2">
                  <Menu.Item key="2">option2</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Envelope3">
                  <Menu.Item key="3">option3</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
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
