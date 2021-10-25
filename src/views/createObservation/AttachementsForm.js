import React from "react";
import { Row, Col, Form, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AttachementsForm = () => {
  return (
    <div>
      <Row justify="start">
        <Col xs={12} sm={6} md={6} lg={6} xl={4}>
          <Form>
            <Form.Item>
              <Upload>
                <Button
                  size="middle"
                  icon={<PlusOutlined />}
                  style={{
                    fontSize: "11px",
                    borderColor: "#112565",
                    color: "#112565",
                    fontWeight: "bold",
                    width: "10rem",
                  }}
                >
                  Add Attachment
                </Button>
              </Upload>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={18} sm={18} md={9} lg={9} xl={6}>
          <Row justify="start">
            <Col span={24} style={{ fontSize: "11px" }}>
              Supported file format:
              <span style={{ fontWeight: "bold" }}>
                {" "}
                .doc, .pdf, .jpeg, .png, .xlsx
              </span>
              <br />
              Maximum File Size:{" "}
              <span style={{ fontWeight: "bold" }}>10MB</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AttachementsForm;
