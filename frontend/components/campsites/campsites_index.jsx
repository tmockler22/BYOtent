import React from 'react';
import CampsiteIndexItem from './campsite_index_item';

class CampsiteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCampsites();
  };

  render() {

    let liCampsites;
    if (!this.props.campsites) return null;
    
    liCampsites = Object.values(this.props.campsites).map(campsite => <CampsiteIndexItem key={campsite.id} campsite={campsite} />);

    return (
      <div className="campsites-index">
        <ul className="campsite-list">
          {liCampsites}
        </ul>
      </div>)
  };
};

export default CampsiteIndex; 