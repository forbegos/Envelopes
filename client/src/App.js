import React from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>HEADER</Header>
          <Content>CONTENT</Content>
          <Footer>FOOTER</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
