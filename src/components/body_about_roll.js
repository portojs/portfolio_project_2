import React from 'react';

const BodyAboutRoll = () => {
  return (
    <div className="body-about-roll">
      <div className="row">
        <div className="col-md-3 body-text">
          <h1 className="lead-text">Press</h1>
        </div>
        <div className="col-md-3 pic">
          <img src="src/img/keiko1.jpg"/>
        </div>
        <div className="col-md-3 body-text">
          <div className="body-about-article">
            <h3>Wall Street Journal</h3>
            <p>
              Consequat molestie parturient adipiscing ad scelerisque
              scelerisque tincidunt rutrum himenaeos hendrerit nunc
              vestibulum consectetur tempus ullamcorper tincidunt
              vestibulum vivamus.
            </p>
            <h4 className="pull-right">1999</h4>
          </div>
        </div>
        <div className="col-md-3 pic">
          <img src="src/img/keiko2.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default BodyAboutRoll;
