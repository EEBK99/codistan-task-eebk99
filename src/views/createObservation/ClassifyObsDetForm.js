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
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={15}
          style={{
            borderColor: "#4BA735",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "5px",
            padding: "8px",
          }}
        >
          <Row align="middle">
            <Col span={24}>
              <span style={{ fontWeight: "1", fontSize: "14px" }}>on</span>{" "}
              <CalendarOutlined />
              <span style={{ fontSize: "11px" }}> {currentDateTime}</span>
            </Col>
            <br />
            <br />
            <Col span={24}>
              <TextArea
                rows={4}
                placeholder="Enter your observation here"
                allowClear
                showCount
              />
            </Col>

            <Col span={1}>
              <span style={{ fontWeight: "1", fontSize: "14px" }}>at</span>
            </Col>
            <Col span={7}>
              <Input placeholder="Add Area" style={{ border: "none" }} />
            </Col>
            <Col span={1}></Col>
            <Col span={15}>
              <span style={{ fontWeight: "1", fontSize: "14px" }}>
                Reporting Time:
              </span>{" "}
              <span style={{ fontSize: "11px" }}> {currentDateTime}</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <br />

      <Row justify="start">
        <Col span={24}>
          <Title level={5}>Suggestions</Title>
        </Col>
        <Col xs={24} sm={22} md={22} lg={20} xl={12}>
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
