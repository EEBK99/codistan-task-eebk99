import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import TopHeader from "../container/TopHeader";
import MainContent from "../createObservation/MainContent";
import LeftNavSiderHomeSvg from "../../assets/svg/LeftNavSiderHome.svg";

const LayoutStructure = () => {
  return (
    <div>
      <Layout>
        <Header>
          <TopHeader />
        </Header>
        <Layout>
          <Sider breakpoint="lg" collapsedWidth="0" theme="light">
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item
                key="1"
                icon={<img src={LeftNavSiderHomeSvg} alt="" />}
              >
                Home
              </Menu.Item>
              <Menu.Item key="2"> My Responsibilities </Menu.Item>
              <Menu.Item key="3"> Observation & Feedback </Menu.Item>
              <Menu.Item key="4"> Incident Management </Menu.Item>
              <Menu.Item key="5"> Audit and Inspection </Menu.Item>
              <Menu.Item key="6"> Risk Management </Menu.Item>
              <Menu.Item key="7"> Learning Management </Menu.Item>
              <Menu.Item key="8"> Performance Analytics </Menu.Item>
            </Menu>
          </Sider>

          <Content>
            <MainContent />
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
};

var { Header, Footer, Sider, Content } = Layout;

Header = styled(Header)`
  background-color: #112565;
  height: 4rem;
`;

Sider = styled(Sider)`
  /* background-color: #edf2f6; */
  background-color: "orange";
`;

Content = styled(Content)`
  padding: 0.5rem 0.5rem;
`;

export default LayoutStructure;
