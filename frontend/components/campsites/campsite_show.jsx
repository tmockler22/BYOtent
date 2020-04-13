import React from 'react';
import { fetchHost } from '../../actions/campsite_actions';
import BookingsContainer from '../bookings/bookings_container';
import SearchNavContainer from '../navbar/search_nav_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faDog, faShower, faUmbrellaBeach, faFire, faToilet } from '@fortawesome/free-solid-svg-icons';

class CampsiteShow extends React.Component {

  componentDidMount() {
    this.props.fetchCampsite(this.props.match.params.campsiteId);
  }

  getIcons() {
    const campsite = this.props.campsite;
    let wifi = campsite.wifi;
    let shower = campsite.showers;
    let pets = campsite.pets_allowed;
    let fire = campsite.fire_pits;
    let toilet = campsite.toilets;
    let lake = campsite.lake_nearby;
    let wifiIcon = wifi ? <div className="show-icon"><FontAwesomeIcon className="show-wifi-icon" icon={faWifi} /><p className="am-des">Wifi</p></div> : <div></div>;
    let showerIcon = shower ? <div className="show-icon"><FontAwesomeIcon className="show-shower-icon" icon={faShower} /> <p className="am-des">Shower</p></div> : <div></div>;
    let petsIcon = pets ? <div className="show-icon"><FontAwesomeIcon className="show-dog-icon" icon={faDog} /> <p className="am-des">Pets Allowed</p></div> : <div></div>;
    let fireIcon = fire ? <div className="show-icon"><FontAwesomeIcon className="show-fire-icon" icon={faFire} /><p className="am-des">Fire pits</p></div> : <div></div>;
    let toiletIcon = toilet ? <div className="show-icon"><FontAwesomeIcon className="show-toilet-icon" icon={faToilet} /> <p className="am-des">Toilets</p></div> : <div></div>;
    let lakeIcon = lake ? <div className="show-icon"><FontAwesomeIcon className="show-lake-icon" icon={faUmbrellaBeach} /> <p className="am-des">Lake Nearby</p></div> : <div></div>;
    return <div className="show-icons">{wifiIcon} {showerIcon} {petsIcon} {fireIcon} {toiletIcon} {lakeIcon}</div>

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
          <div>
            <p className="amentities-title">Campsite Amentities</p>
            {this.getIcons()}
          </div>
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