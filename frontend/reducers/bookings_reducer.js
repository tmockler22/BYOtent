import { RECEIVE_BOOKINGS, REMOVE_BOOKING, RECEIVE_BOOKING, RECEIVE_BOOKINGS_FOR_CAMPSITE, RECEIVE_BOOKINGS_FOR_USER } from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return Object.assign({}, state, { [action.booking.id]: action.booking });
    case RECEIVE_BOOKINGS_FOR_CAMPSITE: 
      return action.bookings;
    case RECEIVE_BOOKINGS_FOR_USER:
      return action.bookings;  
    case REMOVE_BOOKING: 
      let newState = Object.assign({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;