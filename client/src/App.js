import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
// import { Provider } from "react-redux";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Homepage from "./components/Homepage";
import "./Register";
import Login from "./Login";
import Auth from "./utils/auth";
import Register from "./Register";

// import Register from "./Register";
// import Login from "./Login";
// import SideMenu from "./components/SideMenu";

// import Envcard from "./components/Envcard";
const { Header, Footer } = Layout;

function App() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header className="header" style={{ textAlign: "right" }}>
            <Menu className="headerMenu" theme="dark" mode="horizontal">
              {Auth.loggedIn() ? (
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              ) : (
                <>
                  <Link className="btn btn-lg btn-primary m-2" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-lg btn-light m-2" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Menu>
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
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
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
