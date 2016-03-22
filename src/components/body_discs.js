import React, { Component } from 'react';

class BodyDiscs extends Component {
  render() {
    return (
      <div className="container body-discs">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <img src="./src/img/cds2.jpg" />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-lg btn-success">
            Buy all CDs in our shop!
          </button>
        </div>
      </div>
    );
  }
}

export default BodyDiscs;
