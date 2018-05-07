import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';
import launch from './assets/sample_json_data/launch.json';
import launchSite from './assets/sample_json_data/launch_site.json';
import rocket from './assets/sample_json_data/rocket.json';
import LaunchDetails from './view/LaunchDetails';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <LaunchDetails launch={launch} launchSite={launchSite} rocket={rocket} />
      </main>
    );
  }
}

export default hot(module)(App);
