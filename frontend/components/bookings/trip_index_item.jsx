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
      <li className="trip-dates">
        <div>
        <p>{booking.num_campers} campers</p>
        <p>Arriving: {booking.arrival_date}</p>
        <p>Departing: {booking.depart_date}</p>
        </div>
        <button className="cancel-trip" onClick={() => this.props.cancelBooking(bookingId)}>Cancel</button>
        <button className="update-trip" onClick={() => this.props.openBookingModal('updateBooking', booking)}>Update</button>
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