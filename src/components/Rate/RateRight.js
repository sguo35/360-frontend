import React from 'react';

import EditPane from './EditPane';
import SelectPanel from './SelectPanel';
import './Rate.css';

import { Progress } from 'antd';

export default class RateRight extends React.Component {
  render = () => {
    return (
      <div className="Rate-right-container" style={{
        padding: 10
      }}>
        <EditPane />
        <SelectPanel />
      </div>
    )
  }
}