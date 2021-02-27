import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loadingActions from "../../../../redux/actions/loadingAction";

import ProfileMenu from "./Menu/ProfileMenu";
import Orders from "./Container/Orders";
import Reminder from "./Container/Reminder";
import Favcollections from "./Container/Favcollections";
import Editprofile from "./Container/Editprofile";
import Adresses from "./Container/Adresses";
import Reviews from "./Container/Reviews";
import Campaigns from "./Container/Campaigns";

import { LoadingOutlined } from "@ant-design/icons";
import Lottie from "react-lottie";
import animationData from "../../../../animations/loading/loading.json";

class Account extends Component {
  componentDidMount() {
    this.selectOption("sub0");
  }
  selectOption = (option) => {
    this.setState({ selected: option });
  };
  state = {
    selected: "",
  };
  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // <LoadingOutlined style={{margin:"auto",fontSize:"100px"}} />

  render() {
    let comp;
    let page = (
      <div>
        <h5>Lutfen Giris Yap</h5>
      </div>
    );
    if (this.props.loading) {
      page = (
        <Container>
          <Row >
            <Lottie options={this.defaultOptions} style={{margin:"300px auto"}} height={100} width={100} />{" "}
          </Row>
        </Container>
      );
    } else {
      if (this.state.selected == "sub0") comp = <Orders></Orders>;
      if (this.state.selected == "sub1")
        comp = <Favcollections></Favcollections>;
      if (this.state.selected == "sub2") comp = <Editprofile></Editprofile>;
      if (this.state.selected == "sub3") comp = <Adresses></Adresses>;
      if (this.state.selected == "sub4") comp = <Campaigns></Campaigns>;
      if (this.state.selected == "sub5") comp = <Campaigns></Campaigns>;
      if (this.state.selected == "sub6") comp = <Reviews></Reviews>;
      if (this.state.selected == "sub7") comp = <h5>sub7</h5>;
      if (this.state.selected == "sub8") comp = <h5>sub8</h5>;
      if (this.props.isAuthenticated)
        page = (
          <div style={{ display: "flex" }}>
            <ProfileMenu
              selectOption={this.selectOption}
              selected={this.state.selected}
              state={this.state}
            ></ProfileMenu>
            {comp}
          </div>
        );
    }
    return <div>{page}</div>;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: localStorage.getItem("token") != "null",
    loading: state.loadingReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loading: bindActionCreators(loadingActions.loading, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Account);
