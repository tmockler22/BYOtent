import React from 'react';
import { fetchHost } from '../../actions/campsite_actions';
import BookingsContainer from '../bookings/bookings_container';
import SearchNavContainer from '../navbar/search_nav_container';


class CampsiteShow extends React.Component {

  componentDidMount() {
    this.props.fetchCampsite(this.props.match.params.campsiteId);
  }


  render() {
    
    const { campsite } = this.props;
    
    if (campsite === undefined){
      return (null);
    }
  
    return (
      <div>
        <SearchNavContainer /> 
      <div className="campsite-page">
          <img className="campsite-page-photo" src={campsite.photo}></img>
        <div className="campsite-details">
        <div className="campsite-info">
          <h1 className="campsite-show-title">{campsite.title}</h1>
          <p className="campsite-description">{campsite.description}</p>
        </div> 
        <div className="campsite-bookings">
          <BookingsContainer campsite={ campsite }/>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CampsiteShow;