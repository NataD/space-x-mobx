import React from 'react';
import PropTypes from 'prop-types';

import LaunchListFilter from '../components/LaunchListFilter.js';
import LaunchListParts from '../components/LaunchListParts.js';
import LaunchListHeader from '../components/LaunchListHeader.js';
import LaunchLeft from '../components/LaunchListLeft';
import LaunchRight from '../components/LaunchListRight';
import spinner from '../assets/img/spinner.gif';

import './LaunchList.sass';



const options = ["Falcon 1", "Falcon 9", "Falcon 10", "Falcon Heavy"];

class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super();
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  state = {
    rocketNameFilter: '',
    launches: [],
    isLoading: false,
    error: false,
    isEmpty: false
  };

  fetchData(value){
    this.setState({ isLoading: true });
    this.setState({ rocketNameFilter: value },()=>{
      let filter = `?rocket_name=${this.state.rocketNameFilter}`;
      if(this.state.rocketNameFilter === undefined) filter = ``;
      fetch(`https://api.spacexdata.com/v2/launches/all${filter}`)
        .then(response => response.json())
        .then(data =>{
          this.setState({ launches: data , isLoading: false, isEmpty: false});
          if(data.length===0 ) this.setState({ isEmpty: true});
        } )
        .catch(error =>( this.setState({ error: true})))

    });
  }

  handleFilterChange(value) {
    this.fetchData(value);
  }
  componentDidMount(){
    this.fetchData('');
  }

  render() {

    let filtered = this.state.launches;
    let { isLoading, isEmpty, error} = this.state;

    if(error){
      return(
        <div className="launch-list-page">
          <div className="launch-list-container">
            <LaunchListHeader />
            <LaunchListFilter
              options={options}
              onChange={this.handleFilterChange}
            />
            <div className="launches-section__content">
              <div className="launches-section__content-message">
                <p>Whoops! It seems that something has gone wrong!</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    if (isLoading) {
      return(
        <div className="launch-list-page">
          <div className="launch-list-container">
            <LaunchListHeader />
            <LaunchListFilter
              options={options}
              onChange={this.handleFilterChange}
            />
            <div className="launches-section__content additional-message-loader">
              <div className="launches-section__content-message">
              <img src={spinner} width="100" height="100" alt="spinner"/>
              </div>
            </div >
          </div>
        </div>
      )}
    if (isEmpty) {
      return(
        <div className="launch-list-page">
          <div className="launch-list-container">
            <LaunchListHeader />
            <LaunchListFilter
              options={options}
              onChange={this.handleFilterChange}
            />
            <div className="launces-section">
            <div className="launches-section__content additional-message">
              <div className="launches-section__content-message">
              <p>Sorry, no launches found</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="launch-list-page">
        <div className="launch-list-container">
          <LaunchListHeader />
          <LaunchListFilter
            options={options}
            onChange={this.handleFilterChange}
          />
        </div>
        <div className="launches-section__body">
          <div className="launches-section__body-content">

            <div className="launches-section__content">
            {
              filtered.map((element, index) =>{
                if(index%2===0)
                  return (
                      <div key={element.flight_number} className="launches-section__content-column launches-section__content-column-left">
                        <LaunchLeft data={filtered[index]} onClick={this.props.onLaunchClick} />
                      </div>
                  );
                return (
                    <div key={element.flight_number} className="launches-section__content-column launches-section__content-column-right">
                      <LaunchRight data={filtered[index]}  onClick={this.props.onLaunchClick} />
                    </div>
                );
              })
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LaunchesList;
