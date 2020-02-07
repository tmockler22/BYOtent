import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CampsiteIndexContainer from './campsites/campsites_index_container';
import CampsiteShowContainer from './campsites/campsite_show_container';
import MyTripsContainer from './bookings/my_trips_container';
import Search from './campsites/search';

const App = () => (
  <div>
    <Modal /> 
    <header>
      
    </header>
      <Route exact path="/" component={Search} />
      <Route exact path="/campsites/:campsiteId" component={CampsiteShowContainer}/> 
      <ProtectedRoute exact path="/mytrips" component={MyTripsContainer} />
      <Route exact path="/discover" component={CampsiteIndexContainer} /> 
  </div>
);

export default App;