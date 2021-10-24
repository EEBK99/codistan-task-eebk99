import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import TopHeader from "../container/TopHeader";
import MainContent from "../createObservation/MainContent";
import LeftNavSiderHomeSvg from "../../assets/svg/LeftNavSiderHome.svg";
import LeftNavSiderMyResSvg from "../../assets/svg/LeftNavSiderMyRes.svg";
import LeftNavSiderObsFedSvg from "../../assets/svg/LeftNavSiderObsFed.svg";
import LeftNavSiderIncManSvg from "../../assets/svg/LeftNavSiderIncMan.svg";
import LeftNavSiderAudInsSvg from "../../assets/svg/LeftNavSiderAudIns.svg";
import LeftNavSiderRiskMangSvg from "../../assets/svg/LeftNavSiderRiskMang.svg";
import LeftNavSiderLearMangSvg from "../../assets/svg/LeftNavSiderLearMang.svg";
import LeftNavSiderPerAnaSvg from "../../assets/svg/LeftNavSiderPerAna.svg";
import LeftNavSiderYourProjSvg from "../../assets/svg/LeftNavSiderYourProj.svg";

const LayoutStructure = () => {
  return (
    <div>
      <Layout>
        <Header>
          <TopHeader />
        </Header>
        <Layout>
          <Sider breakpoint="lg" collapsedWidth="0" theme="light" width="240">
            <Menu theme="light" mode="inline" defaultSelectedKeys={["3"]}>
              <Menu.Item
                key="1"
                icon={<img src={LeftNavSiderHomeSvg} alt="" />}
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#969696",
                }}
              >
                Home
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<img src={LeftNavSiderMyResSvg} alt="" />}
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#969696",
                }}
              >
                My Responsibilities
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<img src={LeftNavSiderObsFedSvg} alt="" />}
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#969696",
                }}
              >
                Observation & Feedback
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<img src={LeftNavSiderIncManSvg} alt="" />}
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#969696",
                }}
              >
                Incident Management
              </Menu.Item>
              <Menu.Item
                key="5"
                icon={<img src={LeftNavSiderAudInsSvg} alt="" />}
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#969696",
                }}
              >
                Audit and Inspection
              </Menu.Item>
              <Menu.Item
                key="6"
                icon={<img src={LeftNavSiderRiskMangSvg} alt="" />}
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#969696",
                }}
              >
                Risk Management
              </Menu.Item>
              <Menu.Item
                key="7"
                icon={<img src={LeftNavSiderLearMangSvg} alt="" />}
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#969696",
                }}
              >
                Learning Management
              </Menu.Item>
              <Menu.Item
                key="8"
                icon={<img src={LeftNavSiderPerAnaSvg} alt="" />}
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#969696",
                }}
              >
                Performance Analytics
              </Menu.Item>
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
