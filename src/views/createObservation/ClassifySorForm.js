import React from "react";
import { Form, Button } from "antd";
import ClassifySorConcernSvg from "../../assets/svg/ClassifySorConcern.svg";
import ClassifySorPositiveSvg from "../../assets/svg/ClassifySorPositive.svg";
import ClassifySorLSRSvg from "../../assets/svg/ClassifySorLSR.svg";
import ClassifySorNearMissSvg from "../../assets/svg/ClassifySorNearMiss.svg";

const ClassifySorForm = () => {
  return (
    <div>
      <Form layout="inline">
        <Form.Item>
          <Button
            style={{
              color: "#3498DB",
              borderColor: "#3498DB",
              width: "8rem",
              marginBottom: "0.5rem",
            }}
          >
            <img
              src={ClassifySorConcernSvg}
              alt=""
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            Concern
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              color: "#4BA735",
              borderColor: "#4BA735",
              width: "8rem",
              marginBottom: "0.5rem",
            }}
          >
            <img
              src={ClassifySorPositiveSvg}
              alt=""
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            Positive
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              color: "#FC9121",
              borderColor: "#FC9121",
              width: "8rem",
              marginBottom: "0.5rem",
            }}
          >
            <img
              src={ClassifySorLSRSvg}
              alt=""
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            LSR
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              color: "#E74C3C",
              borderColor: "#E74C3C",
              width: "8rem",
              marginBottom: "0.5rem",
            }}
          >
            <img
              src={ClassifySorNearMissSvg}
              alt=""
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            Near Miss
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ClassifySorForm;
