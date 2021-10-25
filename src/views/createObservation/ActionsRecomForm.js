import React from "react";
import { Row, Col, Table, Tag, Select, Button, Input } from "antd";

const ActionsRecomForm = () => {
  const { Option } = Select;

  const columns = [
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
    {
      title: "Heirarchy",
      dataIndex: "heirarchy",
      key: "heirarchy",
    },
    {
      title: "Assign to",
      dataIndex: "assignto",
      key: "assignto",
    },
    {
      title: "Target Date",
      dataIndex: "targetdate",
      key: "targetdate",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag == "Completed" ? "green" : "geekblue";
            if (tag === "Rejected") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Justification",
      key: "justification",
      dataIndex: "justification",
      render: (text) => <a>{text}</a>,
    },
  ];

  const data = [
    {
      key: "1",
      actions: "Remove damage hammer from workshop.",
      heirarchy: "Elimination",
      assignto: "Jhon Doe",
      targetdate: "March 23, 2020",
      status: ["Completed"],
      justification: "View Justification",
    },
    {
      key: "2",
      actions: "Remove vehicle from operations.",
      heirarchy: "Elimination",
      assignto: "Jessica Doe",
      targetdate: "March 23, 2020",
      status: ["Rejected"],
      justification: "View Justification",
    },
    {
      key: "3",
      actions: "Replace deflective lights with new lights.",
      heirarchy: "Substitution",
      assignto: "Jhon Roy",
      targetdate: "March 23, 2020",
      status: ["In Progress"],
      justification: "",
    },
  ];

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={20}>
          <Table
            size="small"
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            tableLayout="auto"
          ></Table>

          <Row style={{ background: "#F8FAFF" }}>
            <Col span={24}>
              <Row>
                <Col span={4}>
                  <Select
                    size="large"
                    placeholder="Heirarchy"
                    style={{ background: "#F8FAFF", width: "100%" }}
                  >
                    <Option value="Heirarchy">Heirarchy</Option>
                    <Option value="Heirarchy 2">Heirarchy 2</Option>
                    <Option value="Heirarchy 3">Heirarchy 3</Option>
                  </Select>
                </Col>
                <Col span={16}>
                  <Input
                    size="large"
                    placeholder="Add custom action/recommendations here"
                    style={{ background: "#F8FAFF" }}
                  />
                </Col>
                {/* <Col span={1}></Col> */}
                <Col span={4}>
                  <Button
                    size="large"
                    type="primary"
                    style={{
                      color: "white",
                      background: "#112565",
                      borderColor: "white",
                      borderRadius: "3px",
                      width: "100%",
                    }}
                  >
                    Add Action
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ActionsRecomForm;
