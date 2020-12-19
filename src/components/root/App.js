
import React, { Component } from 'react'
import {Container} from "reactstrap";
import BaseRouter from '../../routes';
import Foot from '../Footer/Foot';
import Header from '../Navi/Header';
import MainCampaign from '../Navi/MainCampaign';
import MenuBar from '../Navi/MenuBar';

//import {alertify} from "alertifyjs";
export default class App extends Component {

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
    <div>
      <MainCampaign></MainCampaign>
      <Header></Header>
      <MenuBar></MenuBar>
      <BaseRouter></BaseRouter>
      {/* <Header></Header>
      
      <Container>
        <BestCollections></BestCollections>
      </Container> */}
      <Foot></Foot>
    </div>
  );}
}

