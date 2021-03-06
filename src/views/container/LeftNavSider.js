import React from "react";
import { Menu, Row, Col, Divider, Avatar, Button, Tooltip } from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";

import LeftNavSiderHomeSvg from "../../assets/svg/LeftNavSiderHome.svg";
import LeftNavSiderMyResSvg from "../../assets/svg/LeftNavSiderMyRes.svg";
import LeftNavSiderObsFedSvg from "../../assets/svg/LeftNavSiderObsFed.svg";
import LeftNavSiderIncManSvg from "../../assets/svg/LeftNavSiderIncMan.svg";
import LeftNavSiderAudInsSvg from "../../assets/svg/LeftNavSiderAudIns.svg";
import LeftNavSiderRiskMangSvg from "../../assets/svg/LeftNavSiderRiskMang.svg";
import LeftNavSiderLearMangSvg from "../../assets/svg/LeftNavSiderLearMang.svg";
import LeftNavSiderPerAnaSvg from "../../assets/svg/LeftNavSiderPerAna.svg";
import LeftNavSiderYourProjSvg from "../../assets/svg/LeftNavSiderYourProj.svg";

import Member1Svg from "../../assets/svg/Member1.svg";
import Member2Svg from "../../assets/svg/Member2.svg";
import Member3Svg from "../../assets/svg/Member3.svg";
import Member4Svg from "../../assets/svg/Member4.svg";

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
          <Col span={7} style={{ padding: "1rem" }}>
            <Avatar
              shape="square"
              size={50}
              icon={<UserOutlined />}
              style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
            />
          </Col>
          <Col span={12} style={{ padding: "1rem" }}>
            <span style={{ color: "#112565" }}>Welcome!</span>{" "}
            <span
              style={{ color: "#112565", fontWeight: "bold", fontSize: "20px" }}
            >
              EEBK99
            </span>
          </Col>

          <Col span={24} style={{ padding: "1rem" }}>
            <Button
              size="large"
              style={{
                color: "white",
                background: "#112565",
                borderColor: "white",
                borderRadius: "6px",
                width: "100%",
                height: "3rem",
                fontWeight: "bold",
              }}
            >
              Create New <PlusOutlined />
            </Button>
          </Col>

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
                <Menu.Item key="11">
                  <Avatar.Group maxCount={5}>
                    <Tooltip title="User 1" placement="top">
                      <Avatar src={Member1Svg} icon={<UserOutlined />}></Avatar>
                    </Tooltip>

                    <Tooltip title="User 2" placement="top">
                      <Avatar src={Member2Svg} icon={<UserOutlined />}></Avatar>
                    </Tooltip>

                    <Tooltip title="User 3" placement="top">
                      <Avatar src={Member3Svg} icon={<UserOutlined />}></Avatar>
                    </Tooltip>

                    <Tooltip title="User 4" placement="top">
                      <Avatar src={Member4Svg} icon={<UserOutlined />}></Avatar>
                    </Tooltip>

                    <Tooltip title="User 5" placement="top">
                      <Avatar src={Member1Svg} icon={<UserOutlined />}></Avatar>
                    </Tooltip>

                    <Tooltip title="User 6" placement="top">
                      <Avatar src={Member2Svg} icon={<UserOutlined />}></Avatar>
                    </Tooltip>

                    <Tooltip title="User 7" placement="top">
                      <Avatar src={Member3Svg} icon={<UserOutlined />}></Avatar>
                    </Tooltip>

                    <Tooltip title="User 8" placement="top">
                      <Avatar src={Member4Svg} icon={<UserOutlined />}></Avatar>
                    </Tooltip>

                    <Tooltip title="User 9" placement="top">
                      <Avatar src={Member1Svg} icon={<UserOutlined />}></Avatar>
                    </Tooltip>
                  </Avatar.Group>
                </Menu.Item>
              </SubMenu>
              <Divider />
            </Menu>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LeftNavSider;
