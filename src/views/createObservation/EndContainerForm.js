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
              <Select placeholder="Select or type name">
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
              <Select placeholder="Select or type name">
                <Option value="Person">Person </Option>
                <Option value="person 2">Person 2</Option>
                <Option value="Person 3">Person 3</Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default EndContainerForm;
