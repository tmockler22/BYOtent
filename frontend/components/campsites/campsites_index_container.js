import CampsiteIndex from "./campsites_index.jsx";
import { connect } from 'react-redux';
import { fetchCampsites } from '../../actions/campsite_actions';

const msp = (state) => {
  return { campsites: state.entities.campsites };
};

const mdp = () => dispatch => {
  return { fetchCampsites: () => dispatch(fetchCampsites()) };
};

export default connect(
  msp,
  mdp
)(CampsiteIndex);