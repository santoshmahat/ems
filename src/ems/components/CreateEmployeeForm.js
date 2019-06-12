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
            name="firstName"
            onChange={props.handleInputChange}
            placeholder="First Name"
          />
        </Col>
        <Col md={12}>
          <Input
            name="lastName"
            onChange={props.handleInputChange}
            placeholder="Last Name"
          />
        </Col>
      </Row>
    </Item>
    <Item>
      <Row gutter={40}>
        <Col md={12}>
          <Input
            name="location"
            onChange={props.handleInputChange}
            placeholder="Location"
          />
        </Col>
        <Col md={12}>
          <Input
            type="date"
            name="joinDate"
            onChange={props.handleInputChange}
            placeholder="Join Date"
          />
        </Col>
      </Row>
    </Item>
    <Item>
      <Row>
        <Col md={24}>
          <Input
            type="file"
            name="image"
            onChange={props.handleInputChange}
            placeholder="Upload Image"
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
