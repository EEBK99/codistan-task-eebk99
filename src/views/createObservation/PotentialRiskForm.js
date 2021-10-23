import React from "react";
import { Row, Col, Form, Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const PotentialRiskForm = () => {
  return (
    <div>
      <Row justify="start" align="middle">
        <Col span={24}>
          <Row justify="start" align="middle">
            <Col span={2} style={{ background: "green" }}>
              LIKELIHOOD
              <br />
              <span style={{ fontSize: "11px", color: "#969696" }}>
                View Risk Matrix <InfoCircleOutlined />
              </span>
            </Col>

            <Col span={1} style={{ background: "orange" }}></Col>
          </Row>

          <br />
          <br />
          <br />

          <Row justify="start" align="middle">
            <Col span={2}>
              SEVERITY
              <br />
              <span style={{ fontSize: "11px", color: "#969696" }}>
                View Risk Matrix <InfoCircleOutlined />
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PotentialRiskForm;
