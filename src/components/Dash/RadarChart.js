import React, { Component } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import './Radar.css';

export default class Radar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const data = [
      {
        data: {
          leadership: 0.7,
          engagement: 0.2,
          productivity: 0.7,
        },
        meta: { color: '#002766' }
      },
      {
        data: {
          leadership: 0.6,
          productivity: .85,
          engagement: 0.5,
        },
        meta: { color: '#1890ff' }
      }
    ];

    const captions = {
      leadership: 'Leadership',
      productivity: 'Productivity',
      engagement: 'Engagement',
    };
    return (
      <div>
        <RadarChart
          captions={captions}
          data={data}
        />
      </div>
    );
  }
}
