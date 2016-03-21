import React, { Component } from 'react';

class BodyTourRoll extends Component {
  render() {
    return (
      <div className="container-fluid body-tour-roll">
        <div className="row">
          <div className="col-md-3">
            <div className="roll-content lead-text">
              <h2>Tour Dates</h2>
              <h4>2016</h4>
            </div>
          </div>
          <div className="col-md-3 pic">
            <div>
              <img src="/src/img/keiko1_cut.jpg" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="roll-content">
              <h3>January</h3>
              <ul>
                <li>London, 12-01-2016</li>
                <li>Doublin, 14-01-2016</li>
                <li>Edinburgh, 15-01-2016</li>
              </ul>
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
              <h3>February</h3>
              <ul>
                <li>Barcelona, 18-02-2016</li>
                <li>Madrid, 19-02-2016</li>
                <li>Valencia, 21-02-2016</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 pic">
            <div>
              <img src="/src/img/keiko4_cut.jpg" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="roll-content">
              <h3>March</h3>
              <ul>
                <li>New York, 01-03-2016</li>
                <li>San Francisco, 05-03-2016</li>
                <li>Los Angeles, 07-03-2016</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyTourRoll;
