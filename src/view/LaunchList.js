import React from 'react';
import PropTypes from 'prop-types';

import LaunchListFilter from '../components/LaunchListFilter.js';
import LaunchListParts from '../components/LaunchListParts.js';
import LaunchListHeader from '../components/LaunchListHeader.js';

import './LaunchList.sass';

class LaunchList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      rocketNamesFilter: '',
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  get availableRocketNames() {
    const {launches} = this.props;

    let rocketSet = new Set();
    const rocketNames = [];

    launches.forEach(flight => {
      rocketSet.add(flight.rocket.rocket_name);
    });
    rocketSet.forEach(name => {
      rocketNames.push(name);
    });
    return rocketNames;
  }

  get filteredLaunches(){
    const {rocketNamesFilter} = this.state;
    const {launches} = this.props;

    if(!rocketNamesFilter) return launches;

    return launches.filter( launch => launch.rocket.rocket_name === rocketNamesFilter );
  }

  handleFilterChange(value) {
    if(value == 'all' ) this.setState({ rocketNamesFilter: '' });
    else this.setState({ rocketNamesFilter: value });
  }



  render() {
    const {launches, onLaunchClick} = this.props;
    return (
      <div className="launch-list-page">
        <div className="launch-list-container">
          <LaunchListHeader />
          <LaunchListFilter options={this.availableRocketNames} onChange={this.handleFilterChange} />
        </div>

        <LaunchListParts launches={this.filteredLaunches} onLaunchClick={onLaunchClick} />
      </div>
    );
  }
}


export default LaunchList;
