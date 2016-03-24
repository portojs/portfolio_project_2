import React from 'react';

const BodyTour = () => {
  return (
    <div className="container body-tour">
      <div className="row">
        <div className="col-md-4 col-md-offset-3">
          <img src="src/img/soul_quest.jpg" alt="Soul Quest Album Cover Art"/>
        </div>
        <div className="col-md-4">
          <div className="col-content">
            <h4>AVAILABLE NOW!</h4>
            <h2>Soul Quest</h2>
            <div className="btn-group btn-group-lg" role="group">
              <button className="btn btn-success btn-amazon">Amazon</button>
              <button className="btn btn-success">iTunes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyTour;
