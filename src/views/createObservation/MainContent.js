import React from "react";
import { Row, Col, Divider, Typography } from "antd";
import CreateObsForm from "./CreateObsForm";
import ClassifySorForm from "./ClassifySorForm";

const MainContent = () => {
  const { Title } = Typography;

  return (
    <>
      <Row
        justify="start"
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
        <Col span={24}>
          <CreateObsForm />
        </Col>
      </Row>

      <Row
        justify="start"
        style={{
          background: "white",
          borderRadius: "6px",
          padding: "1rem 1rem",
          marginTop: "0.5rem",
        }}
      >
        <Col span={24}>
          <Title level={5}>Classify SOR</Title>
        </Col>
        <Col span={24}>
          <ClassifySorForm />
        </Col>
      </Row>
    </>
  );
};

export default MainContent;
