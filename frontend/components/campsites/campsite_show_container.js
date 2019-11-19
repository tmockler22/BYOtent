import React from 'react';
import { connect } from 'react-redux';
import { fetchCampsite, fetchHost } from '../../actions/campsite_actions';
import CampsiteShow from './campsite_show';


const msp = ({ entities }, ownProps) => ({
  campsite: entities.campsites[ownProps.match.params.campsiteId],
  
});

const mdp = (dispatch) => ({
  fetchCampsite: (campsiteId) => dispatch(fetchCampsite(campsiteId)),
  
});

export default connect(msp, mdp)(CampsiteShow);