import React from 'react';
import CampsiteIndexItem from './campsite_index_item';
import MyMap from './map';
import SearchNavContainer from '../navbar/search_nav_container';



class CampsiteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCampsites();
  };

  render() { 
    
    if (!this.props.location.state) return null; 
    let city = this.props.location.state.address.split(",")[0]; 
    let latLng = this.props.location.state;
    let liCampsites;
    if (!this.props.campsites) return null;
    let campsites = this.props.campsites;
     
    liCampsites = Object.values(this.props.campsites).map(campsite => (campsite.city === city) ? <CampsiteIndexItem key={campsite.id} campsite={campsite} /> : <div></div>);

    return (
      <div>
        <SearchNavContainer />
        <p className="city-index">Camping near <span className="city-name">{city}</span>!</p>
        <div className="campsites-index">
          <ul className="campsite-list">
            {liCampsites}
          </ul>
          <MyMap className="map" campsites={campsites} latLng={latLng}/>
        </div>
      </div>
      )
  };
};

export default CampsiteIndex; 