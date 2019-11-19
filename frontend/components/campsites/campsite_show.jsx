import React from 'react';
import { fetchHost } from '../../actions/campsite_actions';



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
      <div className="campsite-page">
        <img className="campsite-page-photo" src={campsite.photo}></img>
        <h1 className="campsite-title">{campsite.title}</h1>
        <p className="campsite-description">{campsite.description}</p>
      </div>
    );
  }

}

export default CampsiteShow;