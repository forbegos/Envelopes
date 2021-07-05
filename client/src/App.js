import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useParams, Link } from "react-router-dom";
// import { Provider } from "react-redux";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Homepage from "./components/Homepage";
import Register from "./Register";
import Login from "./Login";

// import Register from "./Register";
// import Login from "./Login";
// import SideMenu from "./components/SideMenu";

// import Envcard from "./components/Envcard";
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
                <a href="./login">Login</a>
                <a href="./register">Register</a>
                <a href="./logout">Logout</a>
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
