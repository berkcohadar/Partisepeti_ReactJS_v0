import React, { Component } from 'react'
import { connect } from 'react-redux';
import BestCollections from '../BestCollections/BestCollections';
import {Container,Row} from "reactstrap";
import Header from "../Navi/Header"
//import {alertify} from "alertifyjs";
class App extends Component {

  // componentDidCatch(){   //render ardından ilk çağırılan statik js methodudur.
  //   this.getAPIRequest();
  // }

  // getAPIRequest = () => {
  //   fetch("URL")
  //   .then(response=>response.json())
  //   .then(data=>this.setState({data:data}));; //gelen datayı elimizdeki data ile değiştirdik
  // }

  render() { 
    return (
    <Container>
      <Row>
      <Header></Header>
      </Row>
      <Row>
        <BestCollections></BestCollections>
      </Row>
    </Container>
  );
  }
}



function mapStateToProps(state){
  return {
      data:state.exampleActionReducer
  }
};

export default connect(mapStateToProps)(App);
