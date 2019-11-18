import React from 'react';

class CampsiteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    const campsite = this.props.campsite;
    return (
      <div className="campsite">
        <li className="photo"><img src={campsite.photo}/></li>
        <li className="campsite-title">{campsite.title}</li>
        <li className="campsite-rate">${campsite.daily_rate}/night</li>
      </div>
    )
  }
};

export default CampsiteIndexItem; 