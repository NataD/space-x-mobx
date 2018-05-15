import React from "react";
import PropTypes from "prop-types";

import './LaunchListFilter.sass';

class LaunchFilter extends React.Component {

  onItemClick = (event) => {
    const {onChange} = this.props;
    const { name } = event.currentTarget;
    onChange(name);
  };

  render() {
    const {options, onChange} = this.props;

      return (
      <div className="launch-list-button-holder">

          <button className="launch-list-button" key={'allrockets'} name={'all'} onClick={this.onItemClick}>
            {`all rockets`}
          </button>
          {options && options.length > 0 ?
            options.map(option => (
              <button className="launch-list-button"key={option} name={option} onClick={this.onItemClick}>
                {option}
              </button>
            )) : null }

      </div>
    );
  }
}

export default LaunchFilter;
