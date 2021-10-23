import React from "react";
import { Row, Col, Form, Button, Select, Typography } from "antd";

const EndContainerForm = () => {
  const { Option } = Select;
  const { Title } = Typography;

  return (
    <div>
      <Row justify="start">
        <Col xs={16} sm={7} md={9} lg={7} xl={5}>
          <Form>
            <Form.Item>
              <Title level={4}>Submit To</Title>
              <Select placeholder="Select or type name" allowClear>
                <Option value="Person">Person </Option>
                <Option value="person 2">Person 2</Option>
                <Option value="Person 3">Person 3</Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
        <Col span={2}></Col>
        <Col xs={16} sm={7} md={9} lg={7} xl={5}>
          <Form>
            <Form.Item>
              <Title level={4}>Notify Only</Title>
              <Select
                placeholder="Select or type name"
                mode="multiple"
                allowClear
              >
                <Option value="Person">Person </Option>
                <Option value="person 2">Person 2</Option>
                <Option value="Person 3">Person 3</Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row justify="start">
        <Col xs={16} sm={7} md={9} lg={7} xl={13}>
          <Form layout="inline">
            <Form.Item>
              <Button
                size="large"
                style={{
                  color: "#112565",
                  borderColor: "#112565",
                  marginBottom: "0.5rem",
                  fontSize: "13px",
                  borderRadius: "5px",
                }}
              >
                Preview
              </Button>
            </Form.Item>

            <Col span={8}></Col>

            <Form.Item>
              <Button
                size="large"
                style={{
                  color: "#112565",
                  borderColor: "#112565",
                  marginBottom: "0.5rem",
                  fontSize: "13px",
                  borderRadius: "5px",
                }}
              >
                Save as Draft
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                style={{
                  color: "#4BA735",
                  borderColor: "#4BA735",
                  marginBottom: "0.5rem",
                  fontSize: "13px",
                  borderRadius: "5px",
                }}
              >
                Submit
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                style={{
                  color: "white",
                  background: "#4BA735",
                  marginBottom: "0.5rem",
                  fontSize: "13px",
                  borderRadius: "5px",
                }}
              >
                Mark as Complete
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default EndContainerForm;
