import React, { Component } from 'react';

class BodyAboutRollAlt2 extends Component {
  renderArticles(articleData) {
    return (
      <div key={articleData.year} className="col-md-3">
        <div className="body-about-article">
          <h3>{articleData.name}</h3>
          <p>{articleData.text}</p>
          <h4 className="pull-right">{articleData.year}</h4>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid body-about-roll">
        <div className="row">
          <div className="col-md-3">
            <div className="roll-content lead-text">
              <h2>Press</h2>
            </div>
          </div>
          <div className="col-md-3 pic">
            <div>
              <img src="/src/img/keiko1_cut.jpg" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="roll-content">
              <h3>Los Angeles Outrider</h3>
              <p>Consequat molestie parturient adipiscing ad scelerisque scelerisque tincidunt rutrum himenaeos hendrerit nunc vestibulum consectetur.</p>
              <h4 className="pull-right">2012</h4>
            </div>
          </div>
          <div className="col-md-3 pic">
            <div>
              <img src="/src/img/keiko2_cut.jpg" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pic">
            <div>
              <img src="/src/img/keiko3_cut.jpg" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="roll-content">
              <h3>Vanity</h3>
              <p>Consequat molestie parturient adipiscing ad scelerisque scelerisque tincidunt rutrum himenaeos hendrerit nunc vestibulum consectetur.</p>
              <h4 className="pull-right">2012</h4>
            </div>
          </div>
          <div className="col-md-3 pic">
            <div>
              <img src="/src/img/keiko4_cut.jpg" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="roll-content">
              <h3>New York Times</h3>
              <p>Consequat molestie parturient adipiscing ad scelerisque scelerisque tincidunt rutrum himenaeos hendrerit nunc vestibulum consectetur.</p>
              <h4 className="pull-right">2016</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyAboutRollAlt2;
