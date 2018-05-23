import React from "react";
import PropTypes from "prop-types";

import './LaunchListFilter.sass';

class LaunchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.transfer = this.transfer.bind(this);
  }
  transfer(e){
    this.props.onChange(e.currentTarget.dataset.name);
  }

  render() {
    const {options, onChange} = this.props;

      return (
      <div className="launch-list-button-holder">
        <div className="mission-links__btns">
          <button  onClick={this.transfer} className="launch-list-button" >All rockets</button>
          {
            this.props.options.map((element, index) =>{
              return <button data-name = {element} key={index} onClick={this.transfer} className="launch-list-button" >{element}</button>
            })
          }
        </div>

      </div>
    );
  }
}

export default LaunchFilter;
