import React from 'react';
import PropTypes from 'prop-types';
import launch from '../assets/sample_json_data/launch.json';
import launchSite from '../assets/sample_json_data/launch_site.json';
import rocket from '../assets/sample_json_data/rocket.json';
import logo from '../assets/img/space_x_logo_bw_centered.png';
import arrow from '../assets/img/arrow_pointer.png';
import Header from '../components/Header';
import Details from '../components/Details';
import LearnMore from '../components/LearnMore';
import Footer from '../components/Footer';

import './LaunchDetails.sass';


class LaunchDetails extends React.Component {
    static propTypes = {
        // username: PropTypes.string.isRequired,
    };

    state = {
        // welcomeText: 'Hello',
    };

    render() {


        return (
            <div className="main-container">
              <Header />

              <Details />

              <LearnMore />

              <Footer />


            </div>

        );
    }
}

export default LaunchDetails;
