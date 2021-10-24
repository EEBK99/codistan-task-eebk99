import React from "react";
import { Row, Col, Alert, Input, Typography } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const ClassifyObsDetForm = () => {
  const { TextArea } = Input;
  const { Title } = Typography;

  const currentDateTime = Date();

  return (
    <div>
      <Row>
        <Col
          span={12}
          style={{
            borderColor: "#4BA735",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "3px",
            padding: "8px",
          }}
        >
          <Row align="middle">
            <Col span={24}>
              <span style={{ fontWeight: "1" }}>on</span> <CalendarOutlined />{" "}
              {currentDateTime}
            </Col>
            <br />
            <br />
            <Col span={24}>
              <TextArea
                rows={4}
                placeholder="Enter your observation here"
                allowClear
                showCount
                style={{ border: "none" }}
              />
            </Col>

            <Col span={1}>at</Col>
            <Col span={7}>
              <Input placeholder="Add Area" style={{ border: "none" }} />
            </Col>
            <Col span={4}></Col>
            <Col span={12}>
              <span style={{ fontWeight: "1" }}>Reporting Time:</span>{" "}
              {currentDateTime}
            </Col>
          </Row>
        </Col>
      </Row>

      <br />

      <Row justify="start">
        <Col span={24}>
          <Title level={5}>Suggestions</Title>
        </Col>
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
