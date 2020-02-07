import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import TripIndexItem from './trip_index_item';
import SearchNavContainer from '../navbar/search_nav_container';

// :campsite_id, :camper_id, :arrival_date, :depart_date, :num_campers

class MyTrips extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { 
     this.props.fetchBookingsForUser(this.props.camperId); 
     this.props.fetchCampsites();
  }

  componentWillUnmount() {
    this.props.fetchBookingsForUser(this.props.camperId);
    this.props.fetchCampsites();
  }

  render() {
    let liTrips;
    if (!this.props.bookings && !this.props.campsites) return null;
    let campsites = this.props.campsites; 
    
    liTrips = Object.values(this.props.bookings).map(booking => <TripIndexItem key={booking.id} campsite={campsites[booking.campsite_id]} booking={booking} currentUser={this.props.currentUser} cancelBooking={this.props.cancelBooking} openBookingModal={this.props.openBookingModal}/>);
    const user = Object.values(this.props.currentUser).map(user => <p key={user.id} className="trips-intro">Hey <span className="trip-name">{user.first_name}</span>, you have {liTrips.length} upcoming trips!</p>);
    return (
      <div><SearchNavContainer />
      <div className="trip-index">
        {user}
        <ul className="trip-list">
          {liTrips}
        </ul>
      </div>
      </div>
      )
  };
};

export default MyTrips; 