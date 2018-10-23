import React, { Component } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import './Radar.css';


export default class Radar extends Component{
  constructor(props){
    super(props);

  }
  render(){
    var data = [
          {
            data: {
              leadership: this.props.teamLeadership,
              productivity: this.props.teamProductivity,
              engagement: this.props.teamEngagement,
            },
            meta: { color: '#002766' }
          },
          {
            data: {
              leadership: this.props.myLeadership,
              engagement: this.props.myEngagement,
              productivity: this.props.myProductivity,
            },
            meta: { color: '#1890ff' }
          }
        ];

        const captions = {
              leadership: 'Leadership',
              productivity: 'Productivity',
              engagement: 'Engagement'
            };
    return (
      <div style={{width: 400}}>
      <figure id="Radar-format">
      <RadarChart
          captions={captions}
          data={data}
          size={350}
        />
        <figcaption id="Legend"><span id="You-legend">You</span> |<span id="Team-legend"> Team</span></figcaption>
      </figure>
      </div>
    );
  }
}
