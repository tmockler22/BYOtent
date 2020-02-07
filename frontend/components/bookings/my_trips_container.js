import { connect } from 'react-redux';
import { requestBookings, deleteBooking, requestBookingsForUser } from '../../actions/booking_actions';
import MyTrips from './my_trips';
import { openModal } from '../../actions/modal_actions';
import { fetchCampsites } from '../../actions/campsite_actions';

const msp = ({ entities, session, errors }, ownProps) => ({
  errors: errors.booking,
  loggedIn: Boolean(session.id),
  bookings: entities.bookings,
  camperId: session.id,
  campsites: entities.campsites,
  bookings: entities.bookings,
  currentUser: entities.users
});

const mdp = (dispatch) => ({
  fetchBookings: () => dispatch(requestBookings()),
  cancelBooking: (bookingId) => dispatch(deleteBooking(bookingId)),
  fetchBookingsForUser: (camperId) => dispatch(requestBookingsForUser(camperId)),
  fetchCampsites: () => dispatch(fetchCampsites()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp,
  mdp)(MyTrips);