import React from "react";
import { Form, Select, Row, Col } from "antd";

const InvolvedPerForm = () => {
  const { Option } = Select;

  return (
    <div>
      <Row justify="start">
        <Col span={5}>
          <Form>
            <Form.Item>
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

export default InvolvedPerForm;
