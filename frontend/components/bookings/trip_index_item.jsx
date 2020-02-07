import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class TripIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    const booking = this.props.booking;
    const bookingId = this.props.booking.id;
    const campsite = this.props.campsite;
    
    const tripItem = (campsite && booking) ? (<div className="trip">
      <Link className="trip-campsite-info" to={`/campsites/${campsite.id}`}>
        <li><img className="trip-photo" src={campsite.photo} /></li>
        <li className="trip-campsite-title">{campsite.title}</li>
      </Link >
      <li className="trip-dates">{booking.arrival_date} - {booking.depart_date}
        <button className="cancel-trip" onClick={() => this.props.cancelBooking(bookingId)}>Cancel</button>
      </li>
    </div>) : (<div></div>);

    return (
      <div>
       {tripItem}
      </div>
    )
  }
};

export default TripIndexItem; 