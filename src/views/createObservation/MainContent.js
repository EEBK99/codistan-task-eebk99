import React from "react";
import { Row, Col, Divider, Typography, Form, Select } from "antd";

const MainContent = () => {
  const { Title } = Typography;
  const { Option } = Select;

  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          background: "white",
          borderRadius: "6px",
          padding: "1rem 1rem",
        }}
      >
        <Col span={24}>
          <Title level={4} style={{ color: "#112565" }}>
            Create Observation
          </Title>
        </Col>
        <Col span={24}></Col>
      </Row>
    </>
  );
};

export default MainContent;
