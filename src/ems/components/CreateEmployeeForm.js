import React from "react";
import { Button, Row, Col, Typography, Input, Form } from "antd";
const { Title } = Typography;
const { Item } = Form;

const CreateEmployeeForm = props => (
  <Form>
    <Title level={2}>Create Employee Form</Title>
    <Item>
      <Row gutter={40}>
        <Col md={12}>
          <Input
            name="fullname"
            onChange={props.handleInputChange}
            placeholder="Full Name"
          />
        </Col>
        <Col md={12}>
          <Input
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
          <Button onClick={props.saveCreateEmployeeForm} type="primary">
            Save
          </Button>
        </Col>
      </Row>
    </Item>
  </Form>
);
export default CreateEmployeeForm;
