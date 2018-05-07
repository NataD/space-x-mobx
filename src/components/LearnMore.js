import React from 'react';
import './LearnMore.sass';

class LearnMore extends React.Component{
  render(){
    return (
      <div className="section__learn-more">
        <h2 className="section__learn-more__heading">
          Mission links
        </h2>
        <a className="section__learn-more__links">Reddit campaign</a>
        <a className="section__learn-more__links">Presskit</a>
        <a className="section__learn-more__links">Mission Video</a>
      </div>
    );
  }
}

export default LearnMore;
