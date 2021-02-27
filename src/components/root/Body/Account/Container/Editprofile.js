import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Container, Row } from "reactstrap";

import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import moment from "moment";

import Lottie from "react-lottie";
import animationData from "../../../../../animations/loading/loading.json";

import * as profileActions from "../../../../../redux/actions/profileActions";
import * as loginActions from "../../../../../redux/actions/loginActions";
import * as loadingActions from "../../../../../redux/actions/loadingAction";

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
  FormSelectInput,
  FormInputHalf,
} from "../Account.elements";

class Editprofile extends Component {
  componentDidMount() {
    if (this.props.profile.length == 0) this.props.actions.loading();
    this.props.actions.getProfile(localStorage.getItem("token"));
    this.state.userBirthday = moment(
      this.props.profile.date_of_birth,
      "DD/MM/YYYY"
    );
  }
  handleProfileUpdate = (e) => {
    e.preventDefault();
    this.props.actions.loading();
    console.log(this.state);
    this.props.actions.updateProfile(this.state, localStorage.getItem("token"));
  };
  handlePasswordUpdate = (e) => {
    e.preventDefault();
    // this.props.actions.loading();
    console.log(this.state);
    if (this.state.prevPass != this.state.prevPass) {
      console.log("Lutfen eski sifrenizi dogru giriniz.");
    } else if (this.state.newPass1 != this.state.newPass2) {
      console.log("Girilen sifreler ayni degil.");
    } else if (this.state.newPass1.length < 8) {
      console.log("Sifreniz minimum 8 karakterden olusmalidir.");
    } else if (this.state.newPass1.length > 16) {
      console.log("Sifreniz maksimum 16 karakterden olusmalidir.");
    }
    // this.props.actions.signup(this.state.emailRegister, this.state.pass1, this.state.pass2);
  };
  handleInput = (e) => {
    let input;
    let value;
    if (e.currentTarget == undefined) {
      input = "gender";
      value = e.label;
    } else {
      input = e.currentTarget.name;
      value = e.currentTarget.value;
    }
    this.setState((prev) => ({ ...prev, [input]: value }));
  };
  state = {
    userBirthday: null,
  };
  options = [
    { value: "1", label: "Belirtmek Istemiyorum" },
    { value: "2", label: "Erkek" },
    { value: "3", label: "Kadın" },
    { value: "4", label: "Diğer" },
  ];
  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  custom = {
    control: (base, state) => ({
      ...base,
      boxShadow: "none",
      "&:hover": {
        borderColor: "#ccc !important",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: "#fff !important",
      color: "black",
      "&:hover": {
        backgroundColor: "#e7e4ec !important",
      },
    }),
  };
  render() {
    return (
      <AccountDiv>
        <h1>Profilim</h1>
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
          <ProfileForms>
            <EditProfileForm
              id="form1"
              onSubmit={(e) => this.handleProfileUpdate(e)}
            >
              <FormRow>
                <FormTextArea>
                  <FormText>Ad-Soyad :</FormText>
                </FormTextArea>
                <FormInputHalf
                  type="text"
                  name="name"
                  onChange={(e) => this.handleInput(e)}
                  defaultValue={
                    this.props.profile.first_name
                      ? this.props.profile.first_name
                      : ""
                  }
                ></FormInputHalf>
                <FormInputHalf
                  type="text"
                  name="surname"
                  onChange={(e) => this.handleInput(e)}
                  style={{marginLeft:"auto"}}
                  defaultValue={
                    this.props.profile.last_name
                      ? this.props.profile.last_name
                      : ""
                  }
                ></FormInputHalf>
              </FormRow>
              <FormRow>
                <FormTextArea>
                  <FormText>Doğum Günü :</FormText>
                </FormTextArea>
                <FormInput
                  type="text"
                  name="birthday"
                  onChange={(e) => this.handleInput(e)}
                  defaultValue={
                    this.props.profile.date_of_birth
                      ? this.props.profile.date_of_birth
                      : "GG/AA/YYYY"
                  }
                ></FormInput>
              </FormRow>
              <FormRow>
                <FormTextArea>
                  <FormText>Cinsiyet :</FormText>
                </FormTextArea>
                <FormSelectInput
                  type="text"
                  name="gender"
                  onChange={(e) => this.handleInput(e)}
                  defaultValue={
                    this.props.profile.gender
                      ? this.props.profile.gender == "B"
                        ? { value: "1", label: "Belirtmek Istemiyorum" }
                        : this.props.profile.gender == "E"
                        ? { value: "2", label: "Erkek" }
                        : this.props.profile.gender == "K"
                        ? { value: "3", label: "Kadın" }
                        : { value: "4", label: "Diğer" }
                      : ""
                  }
                  options={this.options}
                  styles={this.custom}
                  isSearchable={false}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: "#ccc",
                    },
                  })}
                ></FormSelectInput>
              </FormRow>
              <FormRow>
                <FormTextArea>
                  <FormText>Cep :</FormText>
                </FormTextArea>
                <FormInput
                  type="text"
                  name="phone"
                  onChange={(e) => this.handleInput(e)}
                  defaultValue={
                    this.props.profile.phone
                      ? this.props.profile.phone
                      : "(5xx-xxx-xxxx)"
                  }
                ></FormInput>
              </FormRow>
              <FormRow>
                <FormTextArea>
                  <FormText>Email :</FormText>
                </FormTextArea>
                <FormInput
                  id="email"
                  type="email"
                  name="email"
                  readOnly="true"
                  style={{
                    background: "rgb(0,0,0,0.1)",
                    color: "rgb(0,0,0,0.6)",
                    cursor: "not-allowed",
                  }}
                  defaultValue={
                    this.props.profile.email ? this.props.profile.email : ""
                  }
                ></FormInput>
              </FormRow>
              <FormRow>
                <OrderMainButton
                  type="submit"
                  style={{ marginRight: 10, background: "#2c343c" }}
                >
                  <OrderMainButtonText>
                    Bilgilerimi Güncelle
                  </OrderMainButtonText>
                </OrderMainButton>
              </FormRow>
            </EditProfileForm>
            <EditProfileForm
              style={{ marginRight: "3%" }}
              id="form2"
              onSubmit={(e) => this.handlePasswordUpdate(e)}
            >
              <FormRow>
                <FormTextArea>
                  <FormText>Mevcut Şifre :</FormText>
                </FormTextArea>
                <FormInput
                  type="password"
                  placeholder="Şifrenizi Giriniz"
                  name="prevPass"
                  onChange={(e) => this.handleInput(e)}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                ></FormInput>
              </FormRow>
              <FormRow>
                <FormTextArea>
                  <FormText>Yeni Şifre :</FormText>
                </FormTextArea>
                <FormInput
                  type="password"
                  name="newPass1"
                  placeholder="Şifrenizi Giriniz"
                  onChange={(e) => this.handleInput(e)}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                ></FormInput>
              </FormRow>
              <FormRow>
                <FormTextArea>
                  <FormText>Yeni Şifre Tekrar :</FormText>
                </FormTextArea>
                <FormInput
                  type="password"
                  name="newPass2"
                  placeholder="Şifrenizi Giriniz"
                  onChange={(e) => this.handleInput(e)}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                ></FormInput>
              </FormRow>
              <FormRow>
                <OrderMainButton
                  type="submit"
                  style={{ marginRight: 10, background: "#2c343c" }}
                >
                  <OrderMainButtonText>Şifre Değiştir</OrderMainButtonText>
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
    profile: state.profileReducer,
    loading: state.loadingReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProfile: bindActionCreators(profileActions.getProfile, dispatch),
      updateProfile: bindActionCreators(profileActions.updateProfile, dispatch),
      loading: bindActionCreators(loadingActions.loading, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Editprofile);


