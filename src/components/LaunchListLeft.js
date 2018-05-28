import arrowPointer from '../assets/img/arrow_pointer.png';
import * as React from "react";
import './LaunchListParts.sass';
import { observer, inject } from 'mobx-react';
import { Provider } from 'mobx-react';
import MainStore from '../stores/MainStore';


@inject('MainStore')
@observer
class LaunchLeft extends React.Component {
  constructor(props){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  getDate(value){
    let date = new Date(value);
    let day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
    let locale = "en-us";
    let month =  date.toLocaleString(locale, { month: "long" });
    let readydate = `${day} ${month} ${date.getFullYear()}`;
    return readydate;
  }

  handleClick(){
    //this.props.onClick();
    this.props.MainStore.switchView('details');
    document.body.scrollTop = 0; //scroll to the top when getting details of a flight
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className="launches-section__item">
        <a onClick = {this.handleClick} className="launches-section-header">
          <span className="launches-section__item-date">{ `${this.getDate(this.props.data.launch_date_local)}` }</span>

        </a>
        <span className="launches-section__item-arrow arrow-icon">
            <span className="arrow-icon arrow-icon-left">
            <img src={arrowPointer} alt="arrow" />

          </span>
        </span>
        <span className="launches-section__item-details item-details-left">
          <span className="launches-section__item-label">{ `rocket:` }</span>
          <span className="launches-section__item-value">{ `${this.props.data.rocket.rocket_name}` }</span>
          <span className="launches-section__item-line">{`|`}</span>
          <span className="launches-section__item-label">{ `launch site:` }</span>
          <span className="launches-section__item-value">{ `${this.props.data.launch_site.site_name_long}` }</span>
        </span>

      </div>
    )}
}


export default LaunchLeft;
