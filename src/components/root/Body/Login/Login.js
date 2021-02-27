import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActions from "../../../../redux/actions/loginActions";
import * as loadingActions from "../../../../redux/actions/loadingAction";

import Lottie from "react-lottie";
import animationData from "../../../../animations/loading/loading.json";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  AccountDiv,
  EditProfileForm,
  FormRow,
  FormTextArea,
  FormText,
  FormInput,
  ProfileForms,
  OrderMainButton,
  OrderMainButtonText,
} from "../Account/Account.elements";

class Login extends Component {
  handleRegister = (e) => {
    e.preventDefault();
    this.props.actions.loading();
    this.props.actions.signup(this.state.emailRegister, this.state.pass1, this.state.pass2);

  };
  handleLogin = (e) => {
    e.preventDefault();
    this.props.actions.loading();
    this.props.actions.login(this.state.emailLogin, this.state.passwordLogin);
  };
  handleLoginInput = (e) => {
    const input = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState((prev) => ({ ...prev, [input]: value}));
  };
  handleRegInput = (e) => {
    const input = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState((prev) => ({ ...prev, [input]: value}));
  };
  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  render() {
    return (
      <AccountDiv
        style={{
          width: "100%",
          margin: "0px auto",
          background: "rgb(231,228,236,0.6)",
        }}
      >
        {this.props.loading ? (
          <Container>
            <Row>
              <Lottie
                options={this.defaultOptions}
                style={{ margin: "300px auto" }}
                height={100}
                width={100}
              />{" "}
            </Row>
          </Container>
        ) : (
          <ProfileForms style={{ padding: "55px 10% 0 10%" }}>
            <EditProfileForm id="form1" onSubmit={(e)=>this.handleRegister(e)}>
              <h1>Üye Ol</h1>
              <FormRow>
                <FormTextArea>
                  <FormText>Ad-Soyad :</FormText>
                </FormTextArea>
                <FormInput
                  type="text"
                  name="nameSurname"
                  onChange={(e) => this.handleRegInput(e)}
                ></FormInput>
              </FormRow>

              <FormRow>
                <FormTextArea>
                  <FormText>Email :</FormText>
                </FormTextArea>
                <FormInput
                  id="emailRegister"
                  type="email"
                  name="emailRegister"
                  onChange={(e) => this.handleLoginInput(e)}
                  placeholder="destek@partisepeti.com"
                ></FormInput>
              </FormRow>
              <FormRow>
                <FormTextArea>
                  <FormText>Şifre :</FormText>
                </FormTextArea>
                <FormInput
                  type="password"
                  id="password-register"
                  name="pass1"
                  placeholder="Şifrenizi Giriniz"
                  onChange={(e) => this.handleRegInput(e)}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                ></FormInput>
              </FormRow>
              <FormRow>
                <FormTextArea>
                  <FormText>Şifre Tekrar :</FormText>
                </FormTextArea>
                <FormInput
                  type="password"
                  id="password-check"
                  name="pass2"
                  placeholder="Şifrenizi Giriniz"
                  onChange={(e) => this.handleRegInput(e)}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                ></FormInput>
              </FormRow>
              <FormRow>
                <OrderMainButton type="submit"
                  style={{ marginRight: 10, background: "#2c343c" }}
                >
                  <OrderMainButtonText>Üye Ol</OrderMainButtonText>
                </OrderMainButton>
              </FormRow>
            </EditProfileForm>
            <EditProfileForm id="form2" style={{ marginRight: "3%" }} onSubmit={(e)=>this.handleLogin(e)}>
              <h1>Giriş Yap</h1>
              <FormRow>
                <FormTextArea>
                  <FormText>Email :</FormText>
                </FormTextArea>
                <FormInput
                  id="emailLogin"
                  type="email"
                  name="emailLogin"
                  onChange={(e) => this.handleLoginInput(e)}
                  placeholder="destek@partisepeti.com"
                ></FormInput>
              </FormRow>
              <FormRow>
                <FormTextArea>
                  <FormText>Şifre :</FormText>
                </FormTextArea>
                <FormInput
                  type="password"
                  id="password-login"
                  name="passwordLogin"
                  placeholder="Şifrenizi Giriniz"
                  onChange={(e) => this.handleLoginInput(e)}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                ></FormInput>
              </FormRow>
              <FormRow>
                <OrderMainButton type="submit"
                  style={{ marginRight: 10, background: "#2c343c" }}
                >
                  <OrderMainButtonText>Giriş Yap</OrderMainButtonText>
                </OrderMainButton>
              </FormRow>
            </EditProfileForm>
          </ProfileForms>
        )}
      </AccountDiv>
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
      login: bindActionCreators(loginActions.login, dispatch),
      signup: bindActionCreators(loginActions.signUp, dispatch),
      loading: bindActionCreators(loadingActions.loading, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);