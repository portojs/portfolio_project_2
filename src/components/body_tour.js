import React from 'react';

const BodyTour = () => {
  return (
    <div className="container body-tour">
      <div className="row">
        <div className="col-md-4 col-md-offset-3">
          <img src="src/img/soul_quest.jpg" alt="Soul Quest Album Cover Art"/>
        </div>
        <div className="col-md-4">
          <h1>AVAILABLE NOW!</h1>
          <h4>Soul Quest</h4>
          <ol>
            <li>Dream Seeker</li>
            <li>Black Lion</li>
            <li>Top Secret</li>
            <li>A Night With Cha Cha</li>
            <li>Moving Mountain</li>
            <li>Antarctica - A Call To Action</li>
            <li>Soul Quest</li>
            <li>Proof</li>
            <li>Two Hearts</li>
            <li>Stingo</li>
          </ol>
          <div className="btn-group btn-group-lg" role="group">
            <button className="btn btn-primary btn-amazon">Amazon</button>
            <button className="btn btn-success">iTunes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyTour;
