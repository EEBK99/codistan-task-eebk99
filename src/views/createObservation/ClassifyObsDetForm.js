import React from "react";
import { Row, Col, Alert } from "antd";

const ClassifyObsDetForm = () => {
  return (
    <div>
      <Row>
        <Col
          span={11}
          style={{
            borderColor: "#4BA735",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "3px",
            padding: "3px",
          }}
        >
          <Row>
            <Col span={24}>on</Col>
            <Col span={24}>It was observed that</Col>
            <Col span={24}>at Add Area</Col>
          </Row>
        </Col>
      </Row>

      <br />

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
