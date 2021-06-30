import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "./App.css";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header" style={{ textAlign: "right" }}>
          <Menu className="headerMenu" theme="dark" mode="horizontal">
            <ul>
              <li>LOGIN</li>
              <li>LOGOUT</li>
            </ul>
          </Menu>
        </Header>

        <Layout>
          <Sider
            width={200}
            className="sider"
            style={{ minHeight: "100vh", textAlign: "center" }}
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
              The novel is named after Moby Dick because he is the center of
              Ahab's obsession and a key figure in his own right. The White
              Whale's appearance is unique. He is an exceptionally large sperm
              whale with a snow-white head, wrinkled brow, crooked jaw, and an
              especially bushy spout. His hump is also white and shaped like a
              pyramid; the rest of his body is marbled with white. He has three
              holes in the right fluke of his tail, and he fantails oddly before
              he submerges. The White Whale seems to have an almost human
              personality, featuring the battle savvy of a bold general. One of
              his favorite tricks is to seem to be fleeing from hunters but
              suddenly turn to attack and destroy their open boats. When engaged
              with the crew of the Pequod, he sounds (dives) and then reappears
              in their midst before they can escape or counter his attack. When
              they lodge harpoons in him, he uses the attaching ropes to
              whiplash and destroy their boats. In a final show of timely brute
              force, he crashes into the bow of the Pequod itself and quickly
              sinks her. These are the facts. Equally important are the legends
              and suspicions regarding Moby Dick. He is said to be immortal and
              omnipresent, supposedly appearing in several locations at the same
              time. Most significant is what he means to Ahab. The captain sees
              the White Whale as a great mask, a façade behind which is some
              "inscrutable thing," an undefined power that Ahab resents and
              seeks to destroy. Each reader must confront this problem: Is Moby
              Dick a mask for some great force of evil? Is he a figure of nature
              that hides, perhaps, the face of God? Or is he just a big, clever
              fish that would leave men alone if they would stop bothering him?
            </Content>

            <Footer className="footer" style={{ textAlign: "center" }}>
              FOOTER
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
