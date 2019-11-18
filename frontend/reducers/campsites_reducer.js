import { RECEIVE_CAMSPITES } from "../actions/campsite_actions";

const campsitesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMSPITES:
      return action.campsites;
    default:
      return state;
  }
};

export default campsitesReducer;