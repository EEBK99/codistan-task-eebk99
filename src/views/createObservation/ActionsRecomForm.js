import React from "react";
import { Row, Col, Table, Tag, Space } from "antd";

const ActionsRecomForm = () => {
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
        <Col span={20}>
          <Table columns={columns} dataSource={data}></Table>
        </Col>
      </Row>
    </div>
  );
};

export default ActionsRecomForm;
