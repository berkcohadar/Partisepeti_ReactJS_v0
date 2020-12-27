
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
import {Navbar} from '../../components';

import BaseRouter from '../../routes';
import Foot from '../Footer/Foot';
// import Header from '../Navi/Header';
import MainCampaign from '../Navbar/MainCampaign';
// import MenuBar from '../Navi/MenuBar';

//import {alertify} from "alertifyjs";
export default class App extends Component {


  render() { 
    return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      {/* <Header></Header>
      <MenuBar></MenuBar> */}
      <BaseRouter></BaseRouter>

      <Foot></Foot>
    </Router>
  );}
}

