import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import GlobalStyle from "../../globalStyles";
import { Navbar } from "../";

import BaseRouter from "../../routes";
import Foot from "./Footer/Foot";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router >
        <GlobalStyle />
        <Navbar />

        {/* <Container>
          {this.props.isAuthenticated ? (
            <Row>
              <p style={{ textAlign: "center" }}>Giris Yapildi, Merhaba!</p>
              <Link to="/logout">Çıkış Yap!</Link>
            </Row>
          ) : (
            <Row>
              <p style={{ textAlign: "center" }}>Kullanici Girisi Yapilmadi.</p>
              <Link to="/login">Giriş Yap!</Link>
            </Row>
          )}
        </Container> */}

        <BaseRouter/>
        <Foot/>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: localStorage.getItem("token") != "null",
  };
}
export default connect(mapStateToProps)(App);
