import React from "react";
import { Row, Col, Divider, Typography } from "antd";
import CreateObsForm from "./CreateObsForm";

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
    </>
  );
};

export default MainContent;
