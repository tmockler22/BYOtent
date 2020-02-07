export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS_FOR_CAMPSITE = "RECEIVE_BOOKINGS_FOR_CAMPSITE";
export const RECEIVE_BOOKINGS_FOR_USER = "RECEIVE_BOOKINGS_FOR_USER";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
import * as APIBooking from '../util/booking_api_util';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings,
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
  bookingType: "create" 
});

export const receiveBookingsForCampsite = bookings => ({
  type: RECEIVE_BOOKINGS_FOR_CAMPSITE,
  bookings 
})

export const receiveBookingsForUser = bookings => ({
  type: RECEIVE_BOOKINGS_FOR_USER,
  bookings
})

export const requestBookings = () => (dispatch) => (
  APIBooking.fetchBookings().then(
    bookings => dispatch(receiveBookings(bookings))
  )
);

export const requestBookingsForCampsite = (campsiteId) => (dispatch) => { 
  return (
  APIBooking.fetchBookingsForCampsite(campsiteId).then(
    bookings => dispatch(receiveBookingsForCampsite(bookings))
  )
  )};

export const requestBookingsForUser = (camperId) => (dispatch) => {
  return (
    APIBooking.fetchBookingsForUser(camperId).then(
      bookings => dispatch(receiveBookingsForUser(bookings))
    )
  )
};  

export const createBooking = (booking, campsiteId) => (dispatch) => {
  return (
    APIBooking.createBooking(booking, campsiteId).then(
      booking => dispatch(receiveBooking(booking)),
      err => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const deleteBooking = (bookingId) => (dispatch) => {
  return (
    APIBooking.deleteBooking(bookingId).then(
      booking => dispatch({ type: REMOVE_BOOKING, bookingId: booking.id })
    ));
  };