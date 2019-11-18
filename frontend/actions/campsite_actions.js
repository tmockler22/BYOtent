import * as CampsiteApiUtil from '../util/campsite_api_util';
export const RECEIVE_CAMSPITES = 'RECEIVE_CAMPSITES';
export const RECEIVE_CAMPSITE = 'RECEIVE_CAMPSITE';

const receiveCampsites = campsites => ({
  type: RECEIVE_CAMSPITES,
  campsites,
});

export const fetchCampsites = () => dispatch => {
  return CampsiteApiUtil.fetchCampsites().
    then(campsites => dispatch(receiveCampsites(campsites)));
};

