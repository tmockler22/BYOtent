import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <img src="assets/tent_logo.png" className="logo"/>
      <NavBarContainer/>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={NavBarContainer} /> 
  </div>
);

export default App;