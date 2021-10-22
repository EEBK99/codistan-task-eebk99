import React from "react";
import { Row, Col, Divider, Typography } from "antd";

const MainContent = () => {
  const { Title } = Typography;

  return (
    <>
      <Row justify="center" align="middle">
        <Col
          span={24}
          style={{
            background: "white",
            borderRadius: "6px",
            padding: "1rem 1rem",
          }}
        >
          <Title level={4} style={{ color: "#112565" }}>
            Create Observation
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default MainContent;
