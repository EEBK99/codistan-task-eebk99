import React from "react";
import { Row, Col, Form, Upload, Button } from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";

const AttachementsForm = () => {
  return (
    <div>
      <Row justify="start">
        <Col span={4}>
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
        <Col span={12}>
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
