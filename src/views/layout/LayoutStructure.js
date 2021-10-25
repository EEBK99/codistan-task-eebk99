import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import TopHeader from "../container/TopHeader";
import MainContent from "../createObservation/MainContent";
import LeftNavSider from "../container/LeftNavSider";

const LayoutStructure = () => {
  return (
    <div>
      <Layout>
        <Header>
          <TopHeader />
        </Header>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            theme="light"
            width="245"
            style={{ padding: "0.5rem 0.5rem", background: "#EDF2F6" }}
          >
            <LeftNavSider />
          </Sider>

          <Content>
            <MainContent />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

var { Header, Sider, Content } = Layout;

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
