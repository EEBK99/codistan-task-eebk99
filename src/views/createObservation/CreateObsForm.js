import React from "react";
import { Form, Select, Row, Col } from "antd";

const CreateObsForm = () => {
  const { Option } = Select;

  return (
    <div>
      <Row>
        <Col
          xs={1}
          sm={1}
          md={1}
          lg={0}
          xl={0}
          style={{ background: "white" }}
        ></Col>
        <Col xs={16} sm={16} md={18} lg={18} xl={12}>
          <Form layout="inline">
            <Form.Item name="selectProject" label="Select Project">
              <Select placeholder="Safety Connect">
                <Option value="Safety Connect">Safety Connect</Option>
                <Option value="Safety Connect2">Safety Connect 2</Option>
                <Option value="Safety Connect3">Safety Connect 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="location" label="Location">
              <Select placeholder="Assembly Line">
                <Option value="Assembly Line">Assembly Line</Option>
                <Option value="Assembly Line2">Assembly Line 2</Option>
                <Option value="Assembly Line3">Assembly Line 3</Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CreateObsForm;
