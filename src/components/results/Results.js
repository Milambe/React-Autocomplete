import React, { Component } from 'react';
import './Results.scss';

class Results extends React.Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="results-wrap">
        <div className="inner">
          <div className="head-results">
            <span className="results-nmb">Résultats de recherche (11)</span>
            <span className="place-1">PFC Clermont-Ferrand</span><i className="zmdi zmdi-long-arrow-right"></i><span className="place-2">AP PP St Pern</span>
          </div>
          {/* Results List */}
          <div className="results-list">
            {/* Item */}
            <div className="result-item">
              {/* Head of item (toggle part) */}
              <div className="head-item">
                <div className="nmb">
                  <span>Trajet n°2</span>
                  <span className="steps">Direct</span>
                </div>
                <div className="duration-details">
                  <span className="time-1">02.01.2018 | 19h30</span>
                  <i className="zmdi zmdi-long-arrow-right"></i>
                  <span className="time-2">02.01.2018 | 19h30</span>
                </div>
                <div className="duration">
                  2 jours et 3 heures
                </div>

              </div>
              {/* End Head of item (toggle part) */}
              {/* Details of item */}
              <div className="result-details">
              </div>
              {/* End of Details of item */}
            </div>
            {/* End item */}
          </div>
          {/* End Results List */}
        </div>
      </div>
    );
  }
}

export default Results;