import React from "react";
import {Route,Switch} from "react-router-dom";
import BestCollections from './components/BestCollections/BestCollections';
import {Container} from "reactstrap";
import Hoc from "./components/root/Hoc";
import Header from "./components/Navi/Header";

const BaseRouter = ()=>(
    <Hoc>
        <Header></Header>
        <Switch>
        <Route exact path="/" component={BestCollections}/>
        </Switch>
        {/* <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/> */}
        {/* <Route path="/products" component={ProductList}/> */}
    </Hoc>
);

export default BaseRouter;