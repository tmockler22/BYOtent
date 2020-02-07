import { connect } from 'react-redux';
import { requestBookings, createBooking, requestBookingsForCampsite } from '../../actions/booking_actions';
import BookingsIndex from './bookings_index';
import { openModal } from '../../actions/modal_actions';

const msp = ({ entities, session, errors }, ownProps) => ({
  errors: errors.booking,
  campsite: ownProps.campsite,
  loggedIn: Boolean(session.id),
  formType: "Book",
  bookingId: null,
  arrivalDate: null,
  departDate: null,
  numGuests: 1,
  bookings: entities.bookings
});

const mdp = (dispatch) => ({
  fetchBookings: () => dispatch(requestBookings()),
  fetchBookingsForCampsite: (campsiteId) => dispatch(requestBookingsForCampsite(campsiteId)),
  createBooking: (booking, campsiteId) => dispatch(createBooking(booking, campsiteId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp,
                       mdp)(BookingsIndex);