import React from 'react';
import { Link } from 'react-router-dom';

class CampsiteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    const campsite = this.props.campsite;
    return (
      <Link to={`/campsites/${campsite.id}`}>
      <div className="campsite">
        <li><img className="photo" src={campsite.photo}/></li>
        <li className="campsite-title">{campsite.title}</li>
        <li className="campsite-rate">${campsite.daily_rate}/night</li>
      </div>
      </Link >
    )
  }
};

export default CampsiteIndexItem; 