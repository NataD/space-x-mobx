import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Details from '../components/Details';
import LearnMore from '../components/LearnMore';
import Footer from '../components/Footer';

import './LaunchDetails.sass';


class LaunchDetails extends React.Component {


    render() {

      const {onBackClick} = this.props;
        return (
            <div className="main-container">
              <Header onBackClick={onBackClick} />
              <Details />
              <LearnMore />
              <Footer />
            </div>
        );
    }
}

export default LaunchDetails;
