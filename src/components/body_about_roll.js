import React, { Component } from 'react';

const ArticleData1 = [
  {
    name: 'Los Angeles Outrider',
    text: 'Consequat molestie parturient adipiscing ad scelerisque scelerisque tincidunt rutrum himenaeos hendrerit nunc vestibulum consectetur tempus ullamcorper tincidunt vestibulum vivamus.',
    year: 1994
  },
  {
    name: 'Vanity',
    text: 'Consequat molestie parturient adipiscing ad scelerisque scelerisque tincidunt rutrum himenaeos hendrerit nunc vestibulum consectetur tempus ullamcorper tincidunt vestibulum vivamus.',
    year: 1999
  },
  {
    name: 'Vanity',
    text: 'Consequat molestie parturient adipiscing ad scelerisque scelerisque tincidunt rutrum himenaeos hendrerit nunc vestibulum consectetur tempus ullamcorper tincidunt vestibulum vivamus.',
    year: 2012
  }
];

const ArticleData2 = [
  {
    name: 'New York Times',
    text: 'Consequat molestie parturient adipiscing ad scelerisque scelerisque tincidunt rutrum himenaeos hendrerit nunc vestibulum consectetur tempus ullamcorper tincidunt vestibulum vivamus.',
    year: 2014
  },
  {
    name: 'Esquire',
    text: 'Consequat molestie parturient adipiscing ad scelerisque scelerisque tincidunt rutrum himenaeos hendrerit nunc vestibulum consectetur tempus ullamcorper tincidunt vestibulum vivamus.',
    year: 2014
  },
  {
    name: 'Empire',
    text: 'Consequat molestie parturient adipiscing ad scelerisque scelerisque tincidunt rutrum himenaeos hendrerit nunc vestibulum consectetur tempus ullamcorper tincidunt vestibulum vivamus.',
    year: 2016
  }
]

class BodyAboutRoll extends Component {
  renderArticles(articleData) {
    return (
      <div className="col-md-4">
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
      <div className="body-about-roll">
        <div className="row">
          <div className="col-md-3 body-heading">
            <h1 className="lead-text">Press</h1>
          </div>
          <div className="col-md-9">
            <div className="row">
              {ArticleData1.map(this.renderArticles)}
            </div>
            <div className="row">
              {ArticleData2.map(this.renderArticles)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyAboutRoll;
