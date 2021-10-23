import React from "react";
import { Row, Col } from "antd";

const MapForm = () => {
  return (
    <div>
      <Row justify="start">
        <Col xs={16} sm={7} md={9} lg={7} xl={5}>
          <iframe
            title="Location"
            width="100%"
            height="150hw"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?q= + ${state.latitude} +, + ${state.longitude} + &hl=en&z=14&amp&output=embed"
            style={{ borderRadius: "0.5rem" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MapForm;
