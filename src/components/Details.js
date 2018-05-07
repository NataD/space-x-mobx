import React from 'react';

import './Details.sass';
import launch from '../assets/sample_json_data/launch.json';
import launchSite from '../assets/sample_json_data/launch_site.json';
import rocket from '../assets/sample_json_data/rocket.json';
import Counter from './Counter.js';

class Details extends React.Component{







  render(){


    return(
      <div className="section launch">
        <div className="launch__info">
          <h2 className="launch__info__date">{(new Date(launch.launch_date_utc).toDateString())}</h2>
          <h1 className="launch__info__name">{launch.rocket.rocket_name} Next Launch</h1>
          <h2 className="launch__info__counter"> <Counter /> </h2>
          <img src={launch.links.mission_patch_small} alt="launch-logo" className="launch__logo"></img>
        </div>
        <div className="launch__details">
          <div className="launch__details__description">
            <h2 className="launch__details__title">Details</h2>
            <p className="launch__details__text">{launch.details}</p>
          </div>
          <div className="launch__details__description">
            <h2 className="launch__details__title">Rocket</h2>
            <div className="launch__details__rocket">
              <p className="launch__details__tag">Name: <span className="launch__details__data">{rocket.name}</span></p>
              <p className="launch__details__tag">Company: <span className="launch__details__data">{rocket.company}</span></p>
              <p className="launch__details__tag">Height: <span className="launch__details__data">{rocket.height.meters} / {rocket.height.feet}</span></p>
              <p className="launch__details__tag">Diameter: <span className="launch__details__data">{rocket.diameter.meters} / {rocket.diameter.feet}</span></p>
              <p className="launch__details__tag">Mass: <span className="launch__details__data">{rocket.mass.kg} / {rocket.mass.lb}</span></p>
            </div>
            <div className="launch__details__rocket">
              <p className="launch__details__tag">First Flight: <span className="launch__details__data">{rocket.first_flight}</span></p>
              <p className="launch__details__tag">Country: <span className="launch__details__data">{rocket.country}</span></p>
              <p className="launch__details__tag">Success Rate: <span className="launch__details__data">{rocket.success_rate_pct}%</span></p>
              <p className="launch__details__tag">Cost per Launch: <span className="launch__details__data">${rocket.cost_per_launch}</span></p>
            </div>
            <p className="launch__details__text">{rocket.description}</p>
          </div>
          <div className="launch__details__description">
            <h2 className="launch__details__title">Launch Pad</h2>
            <div className="launch__details__pad">
              <p className="launch__details__tag">Name: <span className="launch__details__data">{launchSite.location.name}</span></p>

            </div>
            <div className="launch__details__pad">
              <p className="launch__details__tag">Location: <span className="launch__details__data">{launchSite.location.region}</span></p>

            </div>
            <p className="launch__details__text">{launchSite.details}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
