import React from "react";
import { Row, Col, Alert } from "antd";

const ClassifyObsDetForm = () => {
  return (
    <div>
      <Row justify="start">
        <Col span={10}>
          <Row>
            <Col span={11}>
              <Alert
                style={{
                  fontSize: "0.7rem",
                  background: "#EDF2F6",
                  border: "none",
                }}
                message="Damaged hammer was being used at workshop, which can cause hand injury."
              />
            </Col>
            <Col span={1}></Col>
            <Col span={11}>
              <Alert
                style={{
                  fontSize: "0.7rem",
                  background: "#EDF2F6",
                  border: "none",
                }}
                message="Vehicle was in operation with one or more defective parking light."
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ClassifyObsDetForm;
