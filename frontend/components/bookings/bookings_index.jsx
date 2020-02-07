import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { withRouter } from 'react-router';


// :campsite_id, :camper_id, :arrival_date, :depart_date, :num_campers

class BookingsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campsite_id: props.campsite.id,
      num_campers: props.numGuests,
      arrival_date: this.props.arrivalDate,
      depart_date: this.props.departDate,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubtractGuest = this.handleSubtractGuest.bind(this);
    this.handleAddGuest = this.handleAddGuest.bind(this);
    this.isBlocked = this.isBlocked.bind(this);
    this.subtotal = this.subtotal.bind(this);
  }

  componentDidMount() { 
    this.props.fetchBookingsForCampsite(this.props.campsite.id); 
  }

  handleAddGuest(e) {
    e.preventDefault();
    if (this.state.num_campers < this.props.campsite.max_guests) {
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

  subtotal() {
    if (this.state.depart_date && this.state.arrival_date) {
      let amount = this.state.depart_date.diff(this.state.arrival_date, 'days');
      return (<div className="subtotal">
        <p className="subtotal-name">Subtotal</p>
        <p className="subtotal-price">${amount * this.props.campsite.daily_rate}</p>
        </div>)
    } else {
      return (<div className="subtotal-empty">Select available dates!</div>)
    }
  }

  handleSubmit(e) { 
    e.preventDefault();
    if (this.props.loggedIn) {
    // this.setState({ arrival_date: this.state.arrival_date._d, depart_date: this.state.depart_date._d });
    // const booking = Object.assign({}, this.state);
      const booking = {
        campsite_id: this.state.campsite_id,
        num_campers: this.state.num_campers,
        arrival_date: this.state.arrival_date._d,
        depart_date: this.state.depart_date._d,
      };
      this.props.createBooking(booking, this.props.campsite.id);
      this.props.history.push("/mytrips");
    } else {
      this.props.openModal("login");
    }
  }

  isBlocked(day) {
    let bookings = this.props.bookings; 
    let bookingArray = Object.values(bookings);
    for (let i = 0; i < bookingArray.length; i++) {
      const start = bookingArray[i].arrival_date;
      const end = bookingArray[i].depart_date;
      if (day.isBetween(start, end)) {
        return true;
      }
    }
    return false;
  }

  render() {
    return(
    <div className="bookings">
      <div className="bookings-top">
        <div className="bookings-info">
          <p className="bookings-price">${this.props.campsite.daily_rate}</p>
          <p className="bookings-avg">per night</p>
        </div>
      </div>
      <div className="dates">
        <form className="create-booking-dates">
      <DateRangePicker
        startDate={this.state.arrival_date}
        startDateId="check_in" 
        endDate={this.state.depart_date} 
        endDateId="check_out" 
        hideKeyboardShortcutsPanel= {true} 
        withPortal= {true}
        numberOfMonths={1}
        onDatesChange={({ startDate, endDate }) => this.setState({ arrival_date: startDate, depart_date: endDate })} 
        focusedInput={this.state.focusedInput} 
        onFocusChange={focusedInput => this.setState({ focusedInput })} 
        startDatePlaceholderText="Check in"
        endDatePlaceholderText="Check out"
        isDayBlocked={(day) => this.isBlocked(day)}
      />
      {this.subtotal()}
      <button className="book-btn" onClick={this.handleSubmit}>Book</button>
      </form>
        <div className="guests">
          <p className="guests-info">Guests</p>
          <div className="num-guests">
            <button onClick={this.handleSubtractGuest} className="minus-guests"> - </button>
            <span className="guest-count">{this.state.num_campers}</span>
            <button onClick={this.handleAddGuest} className="add-guests"> + </button>
          </div>
        </div> 
    </div>
    </div>)
  }
};

export default withRouter(BookingsIndex); 