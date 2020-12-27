
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
import {Navbar} from '../../components';

import BaseRouter from '../../routes';
import Foot from '../Footer/Foot';
export default class App extends Component {


  render() { 
    return (
    <Router>
      <GlobalStyle/>
      <Navbar/>

      <BaseRouter></BaseRouter>

      <Foot></Foot>
    </Router>
  );}
}

