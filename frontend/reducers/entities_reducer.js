import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import campsitesReducer from './campsites_reducer';
import bookingsReducer from './bookings_reducer';
import updateBookingReducer from './update_booking_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  campsites: campsitesReducer,
  bookings: bookingsReducer,
  updateBooking: updateBookingReducer,
});

export default entitiesReducer;