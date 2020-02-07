import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(address) {
    this.setState({ address });
  };

  handleSelect(address) {
  
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.history.push({pathname: '/discover', state: {latLng: latLng, address: address}}))
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div>
        <NavBarContainer />
          <div className="main-page-info">
            <h1 className="main-page-title">Find yourself outside.</h1>
            <p className="main-page-description">Book unique camping experiences today.</p>
          </div>
      
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="search-bar">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />              
            <input
              {...getInputProps({
                placeholder: 'Search Camping Locations...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <h1 className="explore-title">Explore somewhere new.</h1>
      <div className="explore-main">
          <div className="explore-link" onClick={() => this.props.history.push({ pathname: '/discover', state: { latLng: { lat: 44.765168, lng: -85.622944}, address: "Traverse City" } })}>
          <img className="explore-img" src={window.lakeTahoe} /> 
          <p className="explore-pic-title">Beautiful Lake Tahoe.</p>
        </div>
          <div className="explore-link" onClick={() => this.props.history.push({ pathname: '/discover', state: { latLng: { lat: 44.765168, lng: -85.622944 }, address: "Traverse City" } })}>
          <img className="explore-img" src={window.traverseCity} /> 
            <p className="explore-pic-title">Peaceful Traverse City.</p>
        </div>
          <div className="explore-link" onClick={() => this.props.history.push({ pathname: '/discover', state: { latLng: { lat: 44.765168, lng: -85.622944 }, address: "Traverse City" } })}>
          <img className="explore-img" src={window.joshuaTree} /> 
          <p className="explore-pic-title">Explore Joshua Tree.</p>
        </div>
      </div>
      </div>
    );
  }
};

export default withRouter(Search);