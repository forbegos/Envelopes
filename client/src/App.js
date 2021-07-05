import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useParams, Link } from "react-router-dom";
// import { Provider } from "react-redux";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.css";

import Register from "./Register";
import Login from "./Login";
import SideMenu from "./components/SideMenu";
import Homepage from "./components/Homepage";
const { Header, Footer } = Layout;

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
            {/* <SideMenu /> */}
            <Homepage />
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
