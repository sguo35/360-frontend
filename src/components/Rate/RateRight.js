import React from 'react';

import EditPane from './EditPane';
import SelectPanel from './SelectPanel';
import './Rate.css';


export default class RateRight extends React.Component {
  render = () => {
    return (
      <div className="Rate-right-container">
        <EditPane />
        <SelectPanel />
      </div>
    )
  }
}