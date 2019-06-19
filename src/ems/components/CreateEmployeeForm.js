import React from "react";
import { Button, Row, Col, Typography, Input, Form } from "antd";
const { Title } = Typography;
const { Item } = Form;

const CreateEmployeeForm = props => {
  const fullname = props.setValue ? props.setValue.fullname : "";
  const phone = props.setValue ? props.setValue.phone : "";
  return (
    <Form>
      <Title level={2}>
        {props.isEdit ? "Edit  Employee Form" : "Create  Employee Form"}
      </Title>
      <Item>
        <Row gutter={40}>
          <Col md={12}>
            <Input
              value={fullname}
              name="fullname"
              onChange={props.handleInputChange}
              placeholder="Full Name"
            />
          </Col>
          <Col md={12}>
            <Input
              value={phone}
              name="phone"
              onChange={props.handleInputChange}
              placeholder="Phone"
            />
          </Col>
        </Row>
      </Item>

      <Item>
        <Row>
          <Col md={12}>
            {props.isEdit ? (
              <Button onClick={props.updateCreateEmployeeForm} type="primary">
                Update
              </Button>
            ) : (
              <Button onClick={props.saveCreateEmployeeForm} type="primary">
                Save
              </Button>
            )}
          </Col>
        </Row>
      </Item>
    </Form>
  );
};

export default CreateEmployeeForm;
