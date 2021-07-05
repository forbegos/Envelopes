import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
// import { Provider } from "react-redux";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Homepage from "./components/Homepage";
import Register from "./Register";
import Login from "./Login";
import auth from "./utils/auth";
import Footer1 from "./components/Footer";

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
            <Menu className="headerMenu" theme="dark" mode="horizontal"></Menu>
          </Header>
          <Layout>
            {/* <SideMenu /> */}
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </Layout>
          <Footer className="footer" style={{ textAlign: "center" }}>
            <Footer1 />
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}
export default App;
