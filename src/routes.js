import React from "react";
import {Route,Switch} from "react-router-dom";
import BestCollections from './components/BestCollections/BestCollections';
import Hoc from "./components/root/Hoc";
import Header from "./components/Navi/Header";
import ProductsInCollection from "./components/Collections/ProductsInCollection";


const BaseRouter = ()=>(
    <Hoc>
        <Switch>
        <Route exact path="/" component={BestCollections}/>
        <Route exact path="/collections/:slug" component={ProductsInCollection}/> 
        <Route exact path="/products" component={ProductsInCollection}/> 
        </Switch>
        {/* :slug  --- ulaşmak için this.props.match.params.id */}
        {/* <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/> */}
        {/* <Route path="/products" component={ProductList}/> */}
    </Hoc>
);

export default BaseRouter;