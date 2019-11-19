import * as CampsiteApiUtil from '../util/campsite_api_util';
export const RECEIVE_CAMSPITES = 'RECEIVE_CAMPSITES';
export const RECEIVE_CAMPSITE = 'RECEIVE_CAMPSITE';


export const receiveCampsites = campsites => ({
  type: RECEIVE_CAMSPITES,
  campsites,
});

export const receiveCampsite = (campsite) => {
  return ({
    type: RECEIVE_CAMPSITE,
    campsite
  });
};

export const fetchCampsites = () => dispatch => {
  return CampsiteApiUtil.fetchCampsites().
    then(campsites => dispatch(receiveCampsites(campsites)));
};

export const fetchCampsite = (campsiteId) => dispatch => {
  return CampsiteApiUtil.fetchCampsite(campsiteId).
    then(campsite => dispatch(receiveCampsite(campsite)));
};



