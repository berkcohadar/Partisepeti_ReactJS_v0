import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActions from "../../../../redux/actions/loginActions";
import * as loadingActions from "../../../../redux/actions/loadingAction";


import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined ,LoadingOutlined} from "@ant-design/icons";

import { Link } from 'react-router-dom'

class Signup extends Component {
  onFinish = (values) => {
    this.props.actions.loading();
    this.tryLogin(values.username, values.password1, values.password2);
  };

  tryLogin = (email, password1, password2) => {
    this.props.actions.signup(email, password1, password2);
    // this.props.actions.finished();
  };

  render() {
    return (
      <div>
        <Container>
        {this.props.loading?<Container><Row><LoadingOutlined style={{margin:"auto",fontSize:"100px"}} /></Row></Container>:
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(val) => this.onFinish(val)}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password1"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="password2"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Sign Up!
              </Button>
              Or <Link to="/login">Login</Link>
            </Form.Item>
          </Form>
        }
          
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.loginReducer,
    loading: state.loadingReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      signup: bindActionCreators(loginActions.signUp, dispatch),
      login: bindActionCreators(loginActions.login, dispatch),
      loading: bindActionCreators(loadingActions.loading, dispatch),
      finished: bindActionCreators(loadingActions.finished, dispatch),

    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
