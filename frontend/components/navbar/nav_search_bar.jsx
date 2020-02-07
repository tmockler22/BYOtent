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

class NavSearchBar extends React.Component {
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
      .then(latLng => this.props.history.push({ pathname: '/discover', state: { latLng: latLng, address: address } }))
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="nav-search-bar">
              <FontAwesomeIcon className="nav-search-icon" icon={faSearch} />
              <input
                {...getInputProps({
                  placeholder: 'Search Camping Locations...',
                  className: 'nav-location-search-input',
                })}
              />
              <div className="nav-autocomplete-dropdown-container">
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
      </div>
    );
  }
};

export default withRouter(NavSearchBar);