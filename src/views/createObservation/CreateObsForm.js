import React from "react";
import { Form, Select } from "antd";

const CreateObsForm = () => {
  const { Option } = Select;

  return (
    <div>
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
    </div>
  );
};

export default CreateObsForm;
