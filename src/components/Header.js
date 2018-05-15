import React from 'react';
import './Header.sass';
import logo from '../assets/img/space_x_logo_bw_centered.png';
import arrow from '../assets/img/arrow_pointer.png';

class Header extends React.Component {

  render(){
  let {onBackClick} = this.props;
    return (
      <header className="section-header">
        <div className="navigation">
          <div className="navigation__left">
          <img className="navigation__arrow" src={arrow} alt='arrow'/>
          <span className="navigation__arrow-part" />
          <a className="navigation__button-back" onClick={onBackClick}>Go Back</a>
        </div>
        <div className="navigation__right">
          <img src={logo} alt="logo" className="navigation__logo"/>
        </div>
        </div>
    </header>
    );
  }
}

export default Header;
