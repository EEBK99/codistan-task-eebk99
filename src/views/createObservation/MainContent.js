import React from "react";
import { Row, Col, Divider, Typography } from "antd";
import CreateObsForm from "./CreateObsForm";
import ClassifySorForm from "./ClassifySorForm";
import ClassifyObsDetForm from "./ClassifyObsDetForm";
import InvovledPerForm from "./InvolvedPerForm";
import AttachementsForm from "./AttachementsForm";
import EndContainerForm from "./EndContainerForm";
import Mapform from "./MapForm";
import ActionsRecomForm from "./ActionsRecomForm";
import PotentialRiskForm from "./PotentialRiskForm";

const MainContent = () => {
  const { Title } = Typography;

  return (
    <>
      {/* First White Container */}
      <Row
        justify="start"
        style={{
          background: "white",
          borderRadius: "6px",
          padding: "1rem 1rem",
        }}
      >
        <Col span={24}>
          <Title level={3} style={{ color: "#112565" }}>
            Create Observation
          </Title>
        </Col>
        <Col span={24}>
          <CreateObsForm />
        </Col>
      </Row>

      {/* Second white Container */}
      <Row
        justify="start"
        style={{
          background: "white",
          borderRadius: "6px",
          padding: "1rem 1rem",
          marginTop: "0.5rem",
        }}
      >
        <Col span={24}>
          <Title level={4}>Classify SOR</Title>
        </Col>
        <Col span={24}>
          <ClassifySorForm />
        </Col>

        {/* add space */}
        <br />
        <br />
        <br />

        {/* Observation Detail  */}
        {/* Suggestions  */}
        <Col span={24}>
          <Title level={4}>Observation Detail</Title>
        </Col>
        <Col span={24}></Col>

        <Col span={24}>
          <Title level={5}>Suggestions</Title>
        </Col>
        <Col span={24}>
          <ClassifyObsDetForm />
        </Col>

        <Divider />

        {/* Potential Risk */}
        <Col span={24}>
          <span
            style={{ fontWeight: "bold", fontSize: "20px", color: "#8892B2" }}
          >
            Potential Risk
          </span>
          <br />
          <span style={{ fontSize: "13px", color: "#969696" }}>
            System Defined
          </span>
        </Col>

        <Col span={24}>
          <br />
          <PotentialRiskForm />
        </Col>

        <Divider />

        {/* Actions and Recommendations */}
        <Col span={24}>
          <Title level={4}>Actions and Recommendations</Title>
        </Col>
        <Col span={24}>
          <ActionsRecomForm />
        </Col>

        <Divider />

        {/* Involved Person */}
        <Col span={24}>
          <Title level={4}>
            Involved Person
            <span style={{ fontWeight: "1" }}> (Optional)</span>
          </Title>
        </Col>
        <Col span={24}>
          <InvovledPerForm />
        </Col>

        <Divider />

        {/* Attachments */}
        <Col span={24}>
          <Title level={4}>
            Attachments
            <span style={{ fontWeight: "1" }}> (Optional)</span>
          </Title>
        </Col>
        <Col span={24}>
          <AttachementsForm />
        </Col>

        <Divider />

        {/* Google Map */}

        <Col span={24}>
          <Mapform />
        </Col>

        <Divider />

        {/* Submit to , Notify only and Buttons */}

        <Col span={24}>
          <EndContainerForm />
        </Col>
      </Row>
    </>
  );
};

export default MainContent;
