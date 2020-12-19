import React, { Component, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import LogoArea from "./LogoArea"
import { Input, Button, Form, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
};

export default class NaviForm extends Component {
  handleClick = () => {
    this.props.onChildrenDrawerClose();
  }

  render() {
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={Demo.onFinish}
        onFinishFailed={Demo.onFinishFailed}
      >
        <Row>
          <Col>
            <Form.Item
              label="Ad-Soyad"
              name="nameSurname"
              rules={[
                {
                  required: true,
                  message: "Lütfen mailinizi giriniz.",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Lütfen isim ve soyisminizi giriniz.",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item
              label="Şehir"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Sehrinizi giriniz.",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Posta Kodu"
              name="postcode"
              rules={[
                {
                  required: true,
                  message: "Semtinizi giriniz.",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item
              label="Semt"
              name="district"
              rules={[
                {
                  required: true,
                  message: "Sehrinizi giriniz.",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Mahalle"
              name="district"
              rules={[
                {
                  required: true,
                  message: "Semtinizi giriniz.",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item
              label="Cep"
              name="district"
              rules={[
                {
                  required: true,
                  message: "Semtinizi giriniz.",
                },
              ]}
            >
              <Input placeholder="(5xx-xxx-xxxx)" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Adres"
              name="adress"
              rules={[
                {
                  required: true,
                  message: "Lütfen adresinizi giriniz.",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>

        {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

        <Form.Item {...tailLayout}>
          <Row className="justify-content-end " style={{ marginRight: 10 }}>
            <Button className="go-to-payment" type="primary" onClick={this.handleClick}>
              {/* loading={loadings[0]} onClick={() => this.enterLoading(0)} */}
              Adres Ekle
            </Button>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}