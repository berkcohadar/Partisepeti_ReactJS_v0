import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/root/Body/Home/Home";
import Hoc from "./components/root/Hoc";
import ProductsInCollection from "./components/root/Body/Collections/ProductsInCollection";
import Account from "./components/root/Body/Account/Account";
import Login from "./components/root/Body/Login/Login";
import Logout from "./components/root/Body/Login/Logout";
import SignUp from "./components/root/Body/Login/SignUp";
import ProductDetail from "./components/root/Body/ProductDetail/ProductDetail"

const BaseRouter = () => (
  <Hoc>
    <Switch >
      <Route exact path="/" component={Home}  />
      <Route exact path="/collections/:slug" component={ProductsInCollection} />
      <Route exact path="/products" component={ProductsInCollection} />
      <Route exact path="/deneme/" component={ProductDetail} />
      <Route exact path="/profile" component={Account} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </Hoc>
);
// :slug  --- ulaşmak için this.props.match.params.id 
export default BaseRouter;
