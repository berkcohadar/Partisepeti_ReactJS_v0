import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as logoutActions from "../../../../redux/actions/logoutActions";
import * as loadingActions from "../../../../redux/actions/loadingAction";

import { LoadingOutlined } from "@ant-design/icons";

import Lottie from "react-lottie";
import animationData from "../../../../animations/loading/loading.json";

class Logout extends Component {
  tryLogout = () => {
    this.props.actions.loading();
    this.props.actions.logout();
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
      <Container>
        <Row>
            {this.props.loading ? (
              <Lottie options={this.defaultOptions} style={{margin:"300px auto"}} height={100} width={100} />
            ) : (
              <button onClick={() => this.tryLogout()}>Logout</button>
            )}
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loadingReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logout: bindActionCreators(logoutActions.logout, dispatch),
      loading: bindActionCreators(loadingActions.loading, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
