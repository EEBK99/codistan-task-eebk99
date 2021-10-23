import React from "react";
import { Row, Col, Alert, Input, Typography } from "antd";

const ClassifyObsDetForm = () => {
  const { TextArea } = Input;
  const { Text } = Typography;

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
          <Row align="middle">
            <Col span={24}>on</Col>
            <Col span={24}>
              <TextArea
                rows={4}
                placeholder="It was observed that"
                allowClear
                showCount
                style={{ border: "none" }}
              />
            </Col>

            <Col span={1}>at</Col>
            <Col span={6}>
              <Input placeholder="Add Area" style={{ border: "none" }} />
            </Col>
            <Col span={5}></Col>
            <Col span={12}>Reporting Time:</Col>
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
