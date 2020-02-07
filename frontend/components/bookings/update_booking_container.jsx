import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';
import { openBookingModal, closeModal } from '../../actions/modal_actions';
import UpdateForm from './update_form';
import { updateBooking } from '../../actions/booking_actions';

const mapStateToProps = ({ entities, errors }) => {
  return {
    errors: errors.session,
    booking: entities.updateBooking,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    updateBooking: (booking) => dispatch(updateBooking(booking)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);