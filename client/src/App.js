import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useParams, Link } from "react-router-dom";
// import { Provider } from "react-redux";
import { Layout} from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Homepage from "./components/Homepage";

// import Register from "./Register";
// import Login from "./Login";
// import SideMenu from "./components/SideMenu";

// import Envcard from "./components/Envcard";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header className="header" style={{ textAlign: "right" }}></Header>
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
