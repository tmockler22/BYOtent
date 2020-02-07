import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button className="form-link" onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);