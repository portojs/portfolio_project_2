import React from 'react';

const Footer = (props) => {
  return (
    <footer className="container footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-md-offset-3">
            <ul>
              <li>Legal Notice</li>
              <li>Terms & Conditions</li>
              <li>Disclaimer</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>Contacts</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="pull-left">&copy; All Rights Reserved. Peter Krevenets, 2016.</p>
      <p className="pull-right">Powered by Insidious Mind</p>
    </footer>
  );
}

export default Footer;
