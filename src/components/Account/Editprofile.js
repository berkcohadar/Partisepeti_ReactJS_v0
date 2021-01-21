import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { Form, DatePicker, Button, Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default class Editprofile extends Component {
  onChange(date, dateString) {
    console.log(date, dateString);
  }
  render() {
    return (
      <div>
        <h3>Profilim</h3>

        <Container>
          <Row>
            <Col style={{borderRight:"double",}} xs="6">
            <h5>Üyelik Bilgilerim</h5>
              <Form >
                <Form.Item label="İsim" >
                  <Input placeholder="Berk"/>
                </Form.Item>
                <Form.Item label="Soyisim" >
                  <Input placeholder="Cohadar"/>
                </Form.Item>
                <Form.Item label="Email" >
                  <Input placeholder="berkcohadar1@gmail.com" />
                </Form.Item>
                <Row>
                <p style={{paddingTop:"10px",marginLeft:"15px",marginRight:"10px"}}>Doğum Günü: </p>
                <DatePicker label="" placeholder='14.04.1998' defaultPickerValue='' format='' onChange={() => this.onChange()} />
                </Row>
              </Form>
              <Row>
              <Button type="primary" style={{marginLeft:"auto",marginRight:"10px",marginTop:"20px"}}> Yenile </Button>
              </Row>
            </Col>
            <Col xs="6">
            <h5>Şifre Yenile</h5>

              <Space direction="vertical">
                <Input.Password placeholder="Eski Şifre" style={{marginBottom:"24px",}}/>
                <Input.Password
                  placeholder="Yeni Şifre"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              <Row>
              <Button type="primary" style={{marginLeft:"auto",marginRight:"10px",marginTop:"153px"}}> Yenile </Button>
              </Row>
              </Space>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// type LayoutType = Parameters<typeof Form>[0]['layout'];

// const FormLayoutDemo = () => {
//   const [form] = Form.useForm();
//   const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

//   const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
//     setFormLayout(layout);
//   };

//   const formItemLayout =
//     formLayout === 'horizontal'
//       ? {
//           labelCol: { span: 4 },
//           wrapperCol: { span: 14 },
//         }
//       : null;

//   const buttonItemLayout =
//     formLayout === 'horizontal'
//       ? {
//           wrapperCol: { span: 14, offset: 4 },
//         }
//       : null;

//   return (
//     <>
//       <Form
//         {...formItemLayout}
//         layout={formLayout}
//         form={form}
//         initialValues={{ layout: formLayout }}
//         onValuesChange={onFormLayoutChange}
//       >

//         <Form.Item label="Field A">
//           <Input placeholder="input placeholder" />
//         </Form.Item>
//         <Form.Item label="Field B">
//           <Input placeholder="input placeholder" />
//         </Form.Item>
//         <Form.Item {...buttonItemLayout}>
//           <Button type="primary">Submit</Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };
