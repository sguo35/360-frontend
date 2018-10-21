import React from 'react';

import RateLeft from './RateLeft';
import RateRight from './RateRight';
import './Rate.css';

export default class Rate extends React.Component {
  render = () => {
    return (
      <div className="Rate-parent-container">
        <RateLeft />
        <RateRight/>
      </div>
    );
  }
}