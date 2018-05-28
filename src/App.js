// import { hot } from 'react-hot-loader';
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Provider } from 'mobx-react';

import launch from './assets/sample_json_data/launch.json';
import launchSite from './assets/sample_json_data/launch_site.json';
import rocket from './assets/sample_json_data/rocket.json';
import launches from './assets/sample_json_data/launches.json';

import LaunchDetails from './view/LaunchDetails';
import LaunchList from './view/LaunchList';
import Footer from './components/Footer';
import MainStore from './stores/MainStore';
import './styles/theme.sass';

@inject('MainStore')
@observer
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     viewName: 'list',
  //   };
  //
  //   this.handleLaunchClick = this.handleLaunchClick.bind(this);
  //   this.handleBackClick = this.handleBackClick.bind(this);
  componentDidMount(){
    this.props.MainStore.switchView('list');
  }



  get activeViewComponent() {
    // const { viewName } = this.state;
    const viewName = this.props.MainStore.currentViewName;

    switch (viewName) {
      case 'list':
        return (
          <LaunchList
            launches={launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  handleLaunchClick = () => {
    // this.setState({ viewName: 'details' });
    this.props.MainStore.switchView('details');
    console.log(this.props.MainStore.switchView('details'));
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleBackClick= () => {
    // this.setState({ viewName: 'list' });
    this.props.MainStore.switchView('list');
  };

    render() {
    return (
      <main className="page-container">
        <div className="page-content">
          {this.activeViewComponent}
        </div>
        <Footer />
      </main>
    );
  }
}

// export default hot(module)(App);
export default App;
