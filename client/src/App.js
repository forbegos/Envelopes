import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./store";
import Navbar from "./Navbar";
// import Landing from "./layout/Landing";
import Register from "./Register";
import Login from "./Login";
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            {/* <Route exact path="/" component={Landing} /> */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      // </Provider>
    );
  }
}
export default App;
