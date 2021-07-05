import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import './index.css';

import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
