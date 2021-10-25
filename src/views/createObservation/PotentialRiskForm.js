import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const PotentialRiskForm = () => {
  const { Text } = Typography;

  return (
    <div>
      <Row justify="start" align="middle" wrap="true">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Row justify="start">
            <Col span={3} style={{ background: "orange" }}>
              LIKELIHOOD
              <br />
              <span style={{ fontSize: "11px", color: "#969696" }}>
                View Risk Matrix <InfoCircleOutlined />
              </span>
            </Col>

            {/* <Col span={1} style={{ background: "green" }}></Col> */}
            <Col span={1} align="center" style={{ background: "blue" }}>
              <Button
                style={{
                  borderColor: "#27AE60",
                  color: "#27AE60",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                1
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>Rare</Text>
            </Col>

            <Col span={1}></Col>
            <Col span={1} align="center">
              <Button
                style={{
                  borderColor: "#FFDD59",
                  color: "#FFDD59",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                2
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>Likely</Text>
            </Col>

            <Col span={1}></Col>
            <Col span={1} align="center">
              <Button
                style={{
                  borderColor: "#3498DB",
                  color: "#3498DB",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                3
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>
                Possible
              </Text>
            </Col>

            <Col span={1}></Col>
            <Col span={1} align="center">
              <Button
                style={{
                  borderColor: "#FC9121",
                  color: "#FC9121",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                4
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>
                Unlikely
              </Text>
            </Col>

            <Col span={1}></Col>
            <Col span={1} align="center">
              <Button
                style={{
                  borderColor: "#F14031",
                  color: "#F14031",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                5
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>Rare</Text>
            </Col>
          </Row>

          <br />

          <Row justify="start" align="middle">
            <Col span={2}>
              SEVERITY
              <br />
              <span style={{ fontSize: "11px", color: "#969696" }}>
                View Risk Matrix <InfoCircleOutlined />
              </span>
            </Col>

            <Col span={1}></Col>
            <Col span={1} align="center">
              <Button
                style={{
                  borderColor: "#27AE60",
                  color: "#27AE60",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                1
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>Low</Text>
            </Col>

            <Col span={1}></Col>
            <Col span={1} align="center">
              <Button
                style={{
                  borderColor: "#FFDD59",
                  color: "#FFDD59",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                2
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>Minor</Text>
            </Col>

            <Col span={1}></Col>
            <Col span={1} align="center">
              <Button
                style={{
                  borderColor: "#3498DB",
                  color: "#3498DB",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                3
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>
                Moderate
              </Text>
            </Col>

            <Col span={1}></Col>
            <Col span={1} align="center">
              <Button
                style={{
                  borderColor: "#FC9121",
                  color: "#FC9121",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                4
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>Major</Text>
            </Col>

            <Col span={1}></Col>
            <Col span={1} align="center">
              <Button
                style={{
                  borderColor: "#F14031",
                  color: "#F14031",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                5
              </Button>
              <Text style={{ color: "#707070", fontSize: "11px" }}>
                Critical
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PotentialRiskForm;
