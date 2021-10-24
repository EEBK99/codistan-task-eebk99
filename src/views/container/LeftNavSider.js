import React from "react";
import { Menu, Row, Col, Divider } from "antd";
import LeftNavSiderHomeSvg from "../../assets/svg/LeftNavSiderHome.svg";
import LeftNavSiderMyResSvg from "../../assets/svg/LeftNavSiderMyRes.svg";
import LeftNavSiderObsFedSvg from "../../assets/svg/LeftNavSiderObsFed.svg";
import LeftNavSiderIncManSvg from "../../assets/svg/LeftNavSiderIncMan.svg";
import LeftNavSiderAudInsSvg from "../../assets/svg/LeftNavSiderAudIns.svg";
import LeftNavSiderRiskMangSvg from "../../assets/svg/LeftNavSiderRiskMang.svg";
import LeftNavSiderLearMangSvg from "../../assets/svg/LeftNavSiderLearMang.svg";
import LeftNavSiderPerAnaSvg from "../../assets/svg/LeftNavSiderPerAna.svg";
import LeftNavSiderYourProjSvg from "../../assets/svg/LeftNavSiderYourProj.svg";

const LeftNavSider = () => {
  const { SubMenu } = Menu;

  return (
    <>
      <div
        style={{
          background: "white",
          borderRadius: "6px",
          width: "100%",
          height: "100%",
        }}
      >
        <Row>
          <Col span={24}>sadsaddas</Col>

          <Col span={24}>
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

              <Divider />

              <SubMenu
                key="sub1"
                title="Your Projects"
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#112565",
                }}
              >
                <Menu.Item
                  key="9"
                  icon={<img src={LeftNavSiderYourProjSvg} alt="" />}
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#969696",
                  }}
                >
                  Alpha project
                </Menu.Item>
                <Menu.Item
                  key="10"
                  icon={<img src={LeftNavSiderYourProjSvg} alt="" />}
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#969696",
                  }}
                >
                  Beta project
                </Menu.Item>
              </SubMenu>

              <Divider />

              <SubMenu
                key="sub2"
                title="Team Members"
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#112565",
                }}
              >
                <Menu.Item
                  key="11"
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#969696",
                  }}
                >
                  Members
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LeftNavSider;
