import React from 'react';


import './Dash.css';

import { Progress } from 'antd';
import DashCenter from './DashCenter';

export default class DashRight extends React.Component {
  render = () => {
    return (
      <div className="Dash-right-container" style={{
          padding: 10
        }}>
        <DashCenter></DashCenter>
      </div>
    )
  }
}
