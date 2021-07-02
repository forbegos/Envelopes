import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Cards from "./components/cards";
import { fixControlledValue } from "antd/lib/input/Input";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header" style={{ textAlign: "right" }}>
          <Menu className="headerMenu" theme="dark" mode="horizontal">
            <div className="navLinks">
              <a href="#signup">Signup</a>
              <a href="#login">Login</a>
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
  );
}

export default App;
