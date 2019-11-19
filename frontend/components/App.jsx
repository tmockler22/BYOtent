import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Link } from 'react-router-dom';
import CampsiteIndexContainer from './campsites/campsites_index_container';
import CampsiteShowContainer from './campsites/campsite_show_container';

const App = () => (
  <div>
    <header>
      <Link to="/"><img src={window.tentLogoURL} className="logo"/></Link>
      <NavBarContainer/>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={CampsiteIndexContainer} /> 
    <Route exact path="/campsites/:campsiteId" component={CampsiteShowContainer}/> 
  </div>
);

export default App;