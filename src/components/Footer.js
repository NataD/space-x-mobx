import React from 'react';
import './Footer.sass';

class Footer extends React.Component{
  render(){
    return (
      <footer className="footer">
        <div className="footer__container container__social">
          <ul className="footer__social-icons">
            <li className="footer__social-icons__elements">Follow Spacex</li>
            <li className="footer__social-icons__elements">Twitter</li>
            <li className="footer__social-icons__elements">Youtube</li>
            <li className="footer__social-icons__elements">Flickr</li>
            <li className="footer__social-icons__elements">Instagram</li>
          </ul>
        </div>
        <div className="footer__container container__copy-right">
          <p className="container__copy-right-text">
            2018 space exploration technologies corp.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
