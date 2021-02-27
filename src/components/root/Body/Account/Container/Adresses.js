import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActions from "../../../../../redux/actions/loginActions";
import * as loadingActions from "../../../../../redux/actions/loadingAction";

import Lottie from "react-lottie";
import animationData from "../../../../../animations/loading/loading.json";

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
} from "../Account.elements";

class Adresses extends Component {
  // componentDidMount() {
  //   if (this.props.profile.length == 0) this.props.actions.loading();
  //   this.props.actions.getProfile(localStorage.getItem("token"));
  //   this.state.userBirthday = moment(
  //     this.props.profile.date_of_birth,
  //     "DD/MM/YYYY"
  //   );
  // }
  handleAddAdress = (e) => {
    e.preventDefault();
    // this.props.actions.loading();
    console.log(this.state)
    // this.props.actions.signup(this.state.emailRegister, this.state.pass1, this.state.pass2);

  };
  handleInput = (e) => {
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
     <h1>Adreslerim</h1>
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
         <EditProfileForm id="form1" onSubmit={(e)=>this.handleAddAdress(e)}>
         <FormRow>
              <FormTextArea>
                <FormText>Ad  Soyad :</FormText>
              </FormTextArea>
              <FormInput
                type="text"
                name="nameSurname"
                defaultValue={null}
                onChange={(e) => this.handleInput(e)}
              ></FormInput>
            </FormRow>
            <FormRow>
              <FormTextArea>
                <FormText>Şehir :</FormText>
              </FormTextArea>
              <FormInput
                type="text"
                name="city"
                defaultValue={null}
                onChange={(e) => this.handleInput(e)}
              ></FormInput>
            </FormRow>
            <FormRow>
              <FormTextArea>
                <FormText>Posta Kodu :</FormText>
              </FormTextArea>
              <FormInput
                type="text"
                name="postcode"
                defaultValue={null}
                onChange={(e) => this.handleInput(e)}
              ></FormInput>
            </FormRow>
            <FormRow>
              <FormTextArea>
                <FormText>Semt  :</FormText>
              </FormTextArea>
              <FormInput
                type="text"
                name="district"
                defaultValue={null}
                onChange={(e) => this.handleInput(e)}
              ></FormInput>
            </FormRow>
            <FormRow>
              <FormTextArea>
                <FormText>Mahalle :</FormText>
              </FormTextArea>
              <FormInput
                id="neighborhood"
                type="text"
                name="neighborhood"
                defaultValue={null}
                onChange={(e) => this.handleInput(e)}
              ></FormInput>
            </FormRow>
            <FormRow>
              <FormTextArea>
                <FormText>Cep :</FormText>
              </FormTextArea>
              <FormInput
                type="text"
                name="phone"
                defaultValue={null}
                onChange={(e) => this.handleInput(e)}
              ></FormInput>
            </FormRow>
            <FormRow>
              <FormTextArea>
                <FormText>Adres :</FormText>
              </FormTextArea>
              <FormInput
                type="text"
                name="adress"
                defaultValue={null}
                onChange={(e) => this.handleInput(e)}
              ></FormInput>
            </FormRow>
            <FormRow>
              <OrderMainButton type="submit"
                style={{ marginRight: 10, background: "#2c343c" }}
              >
                <OrderMainButtonText>Adres Ekle</OrderMainButtonText>
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
    isAuthenticated: localStorage.getItem("token") != "null",
    login: state.loginReducer,
    loading: state.loadingReducer,
  };
}
export default connect(mapStateToProps)(Adresses);