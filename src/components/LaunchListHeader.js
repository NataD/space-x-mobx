import React from 'react';
import './LaunchListHeader.sass';
import logo from '../assets/img/space_x_logo_bw_centered.png';

class LaunchListHeader extends React.Component {

  render(){
    let {onBackClick} = this.props;
    return (
      <header className="hero">
        <img src={logo} alt="space-x logo" className="launch-list-logo" />
        <h1 className="launch-list-heading">Launches 2018</h1>
      </header>
    );
  }
}

export default LaunchListHeader;
