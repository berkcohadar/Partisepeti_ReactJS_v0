import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import ProfileMenu from "./ProfileMenu";
import Orders from "./Orders";
import Reminder from "./Reminder";
import Favcollections from "./Favcollections"
import Editprofile from "./Editprofile"
import Adresses from "./Adresses"
import Reviews from "./Reviews"
import Campaigns from "./Campaigns"



export default class Account extends Component {
  selectOption = (option) => {
    this.setState({ selected: option.key });
  };
  state = {
    selected: "sub1",
  };
  render() {
    let comp;
    if (this.state.selected == "sub1") comp = <Orders></Orders>;
    if (this.state.selected == "sub2") comp = <Favcollections></Favcollections>;
    if (this.state.selected == "sub3") comp = <Editprofile></Editprofile>;
    if (this.state.selected == "sub4") comp = <Adresses></Adresses>;
    if (this.state.selected == "sub5") comp = <Adresses></Adresses>;
    if (this.state.selected == "sub6") comp = <Campaigns></Campaigns>;
    if (this.state.selected == "sub7") comp = <Reviews></Reviews>;
    if (this.state.selected == "sub8") comp = <h5>sub8</h5>;
    if (this.state.selected == "sub9") comp = <h5>sub9</h5>;
    return (
      <Container>
        <Row>
          <Col xs="3">
            <ProfileMenu
              selectOption={this.selectOption}
              selected={this.state.selected}
            ></ProfileMenu>
          </Col>
          <Col xs="9">{comp}</Col>
        </Row>
      </Container>
    );
  }
}
