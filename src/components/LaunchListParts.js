import React from "react";
import PropTypes from "prop-types";
import arrowPointer from '../assets/img/arrow_pointer.png';
import './LaunchListParts.sass';


class LaunchListParts extends React.Component {

  getDate(value){
    let date = new Date(value);
    let day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
    let locale = "en-us";
    let month =  date.toLocaleString(locale, { month: "long" });
    let readydate = `${day} ${month} ${date.getFullYear()}`
    return readydate;
  }

  getLaunchSection() {
    const {launches, onLaunchClick} = this.props;

    if (launches.length > 0) {
      let launchesLeft =[];
      let launchesRight =[];

      let k =0;
      while(k<launches.length){
        launchesLeft.push(launches[k]);
        if(k+1<launches.length) launchesRight.push(launches[k+1]);
        k+=2;
      }

      const launchesSectionLeft = launchesLeft.map(item => (
        <div className="launches-section__item" key={item.flight_number} onClick={onLaunchClick}>
          <span className="launches-section__item-date">{ `${this.getDate(item.launch_date_local)}` }</span>
          <span className="launches-section__item-arrow arrow-icon">
            <span className="arrow-icon arrow-icon-left">
    <img
      src={arrowPointer}
      alt=""
    />
              <div className="round"></div>
          </span>
    </span>
          <span className="launches-section__item-details item-details-left">
    <span className="launches-section__item-label">{ `rocket:` }</span>
    <span className="launches-section__item-value">{ `${item.rocket.rocket_id}` }</span>
    <span className="launches-section__item-line">{`|`}</span>
    <span className="launches-section__item-label">{ `launch site:` }</span>
    <span className="launches-section__item-value">{ `${item.launch_site.site_name_long}` }</span>
    </span>
        </div>
      ));

      const launchesSectionRight = launchesRight.map(item => (
        <div className="launches-section__item" key={item.flight_number} onClick={onLaunchClick}>
          <span className="launches-section__item-date">{ `${this.getDate(item.launch_date_local)}` }</span>
          <span className="launches-section__item-arrow">
    <span className="arrow-icon arrow-icon-right">
    <img
      src={arrowPointer}
      alt=""
    />
    </span>
    </span>
          <span className="launches-section__item-details item-details-right">
    <span className="launches-section__item-label">{ `rocket:` }</span>
    <span className="launches-section__item-value">{ `${item.rocket.rocket_id}` }</span>
    <span className="launches-section__item-line">{`|`}</span>
    <span className="launches-section__item-label">{ `launch site:` }</span>
    <span className="launches-section__item-value">{ `${item.launch_site.site_name_long}` }</span>
    </span>
        </div>
      ));

      return (
        <div className="launches-section__content">
          <div className="launches-section__content-column launches-section__content-column-left">{ launchesSectionLeft }</div>
          { launchesSectionRight.length > 0 ? (<div className="launches-section__content-column launches-section__content-column-right">{ launchesSectionRight }</div>) : null }
        </div>
      );
    }

    return null;
  }

  render() {
    const {launches, onLaunchClick} = this.props;
    return (
      <div className="launches-section__body">
        <div className="launches-section__body-content">
          {this.getLaunchSection()}
        </div>
      </div>
    );
  }
}

export default LaunchListParts;
