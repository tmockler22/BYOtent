import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faDog, faShower } from '@fortawesome/free-solid-svg-icons';

class CampsiteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  getIcons() {
    const campsite = this.props.campsite;
    let wifi = campsite.wifi; 
    let shower = campsite.showers;
    let pets = campsite.pets_allowed; 
    let wifiIcon = wifi ? <FontAwesomeIcon className="wifi-icon" icon={faWifi} /> : <div></div>;
    let showerIcon = shower ? <FontAwesomeIcon className="shower-icon" icon={faShower} /> : <div></div>;
    let petsIcon = pets ? <FontAwesomeIcon className="dog-icon" icon={faDog} /> : <div></div>; 
    
    return <div className="index-icons">{wifiIcon} {showerIcon} {petsIcon}</div>
    
  }

  render() {
    const campsite = this.props.campsite;
    return (
      <Link to={`/campsites/${campsite.id}`}>
      <div className="campsite">
        <li><img className="photo" src={campsite.photo}/></li>
        <li className="campsite-toprow">
          <p className="campsite-title">{campsite.title}</p>
          {this.getIcons()}
        </li>
        <li className="campsite-bottomrow">
          <p className="campsite-location-index">{campsite.city}, {campsite.state}</p>
          <p className="campsite-rate">${campsite.daily_rate}/night</p>
        </li>
      </div>
      </Link >
    )
  }
};

export default CampsiteIndexItem; 