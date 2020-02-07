import { OPEN_BOOKING_MODAL, CLOSE_MODAL } from '../actions/modal_actions';;

const updateBookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_BOOKING_MODAL:
      return action.booking;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default updateBookingReducer; 