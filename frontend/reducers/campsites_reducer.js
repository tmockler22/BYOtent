import { RECEIVE_CAMSPITES, RECEIVE_CAMPSITE } from "../actions/campsite_actions";

const campsitesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMSPITES:
      return action.campsites;
    case RECEIVE_CAMPSITE:
      return Object.assign({}, state,
        { [action.campsite.campsite.id]: action.campsite.campsite });
    default:
      return state;
  }
};

export default campsitesReducer;