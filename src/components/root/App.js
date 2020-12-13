import React, { Component } from 'react'
import { connect } from 'react-redux';
import BestCollections from '../BestCollections/BestCollections';
import {Container} from "reactstrap";
import Header from "../Navi/Header";
import '../../App.css';
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
      
      <Header></Header>
      
      <Container>
        <BestCollections></BestCollections>
      </Container>
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
