import React, { Component } from 'react';

class BodyTourRoll extends Component {
  render() {
    return (
      <div className="container-fluid body-tour-roll">
        <div className="row">
          <div className="col-md-3">
            <h2>Tour Dates</h2>
            <h4>2016</h4>
          </div>
          <div className="col-md-3 pic">
            <h2>January</h2>
          </div>
          <div className="col-md-3">
            <ul>
              <li>UK, London, 12-01-2016</li>
              <li>UK, Doublin, 14-01-2016</li>
              <li>UK, Edinburgh, 15-01-2016</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>France, Paris, 18-01-2016</li>
              <li>France, Lyon, 19-01-2016</li>
              <li>France, Nice, 21-01-2016</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pic">
            <h2>February</h2>
          </div>
          <div className="col-md-3">
            <ul>
              <li>Spain, Barcelona, 18-02-2016</li>
              <li>Spain, Madrid, 19-02-2016</li>
              <li>Spain, Valencia, 21-02-2016</li>
            </ul>
          </div>
          <div className="col-md-3 pic">
            <h2>March</h2>
          </div>
          <div className="col-md-3">
            <ul>
              <li>USA, New York, 01-03-2016</li>
              <li>USA, San Francisco, 05-03-2016</li>
              <li>USA, Los Angeles, 07-03-2016</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyTourRoll;
