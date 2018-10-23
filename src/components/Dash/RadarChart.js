import React, { Component } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';


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
        meta: { color: '#4786ef' }
      },
      {
        data: {
          leadership: 0.6,
          productivity: .85,
          engagement: 0.5,
        },
        meta: { color: '#e2e52b' }
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
