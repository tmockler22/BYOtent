import React from 'react';
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
      id: this.props.booking.id, 
      num_campers: this.props.booking.num_campers,
      arrival_date: this.props.booking.arrival_date,
      depart_date: this.props.booking.depart_date
    }
    this.handleSubtractGuest = this.handleSubtractGuest.bind(this);
    this.handleAddGuest = this.handleAddGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let newStart = this.state.start_date ? this.state.start_date._d : this.state.arrival_date;
    let newEnd = this.state.end_date ? this.state.end_date._d : this.state.depart_date;
    const booking = {
        id: this.state.id, 
        num_campers: this.state.num_campers,
        arrival_date: newStart,
        depart_date: newEnd,
      };
    this.props.updateBooking(booking);
    this.props.history.push("/mytrips");
    this.props.closeModal();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  };

  handleAddGuest(e) {
    e.preventDefault();
    if (this.state.num_campers < 10) {
      let newGuestCount = this.state.num_campers + 1;
      this.setState({ num_campers: newGuestCount });
    }
  }

  handleSubtractGuest(e) {
    e.preventDefault();
    if (this.state.num_campers > 1) {
      let newGuestCount = this.state.num_campers - 1;
      this.setState({ num_campers: newGuestCount });
    }
  }

  render() {
    return (
      <div className="modal-screen">
       <div className="update-session-modal">
          <h3 className="update-form-description">Update Booking</h3>
          <form className="update-booking-dates">
            <div className="update-date-range-picker">
            <DateRangePicker
              startDate={this.state.start_date}
              startDateId="check_in"
              endDate={this.state.end_date}
              endDateId="check_out"
              hideKeyboardShortcutsPanel={true}
              numberOfMonths={1}
              onDatesChange={({ startDate, endDate }) => this.setState({ start_date: startDate, end_date: endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              startDatePlaceholderText="Check in"
              endDatePlaceholderText="Check out"
            />
            </div>
            <button className="update-book-btn" onClick={this.handleSubmit}>Update</button>
          </form>
            <div className="update-guests">
              <p className="update-guests-info">Guests</p>
              <div className="update-num-guests">
                <button onClick={this.handleSubtractGuest} className="update-minus-guests"> - </button>
                <span className="guest-count">{this.state.num_campers}</span>
                <button onClick={this.handleAddGuest} className="update-add-guests"> + </button>
              </div>
            </div> 
        </div>
      </div>
    );
  };
};

export default withRouter(UpdateForm);