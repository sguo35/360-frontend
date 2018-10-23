import React from 'react';

import { Card, Tag, Button } from 'antd';

import { connect } from 'react-redux';
import { store } from '../../redux/store';

import Wordcloud from './Wordcloud';
import Radar from './RadarChart';

export default class DashCenter extends React.Component {
  constructor (props) {
    super(props);
  }
  render = () => {
    let text = "Jaiveer actively communicates outside of meetings, and is easy to get ahold of. Jaiveer is always ready to meet and will take time off of his schedule and this benefits our team in terms of teamwork and getting stuff done. Jaiveer offers great insight and perspective to team goals and discussions such as when he/she proposed to angle our project towards an easier implementation for the user, moving the team forward. Jaiveer stepped out of their comfort zone by taking on the challenge of AngularJS, efficiently learning and working on a new skill even though it may have been new or hard for them.Jaiveer’s quality of work is outstanding because he/she takes whatever amount of time to create a quality product .The execution of the website created as well as the Attendy app and its functions shows extraordinary effort and thought, and it is delivered in a timely manner. Jaiveer consistently  sets up team meetings and listens to others, which is something not many others are willing to take on or do. It is beneficial to the team because it propels the team forward because it builds a sense of trust. Jaiveer is always looking to push himself technically and this tendency to create and develop in this manner benefits our progress/team dynamic by expanding what our team is capable of accomplishing and what we can incorporate."
    return (
      <div className="Dash-center-pane">
          <Card style={{width:'50%'}}>
            <div style={{display:'inline-block', margin: 'auto'}}>
              <Wordcloud text={text}></Wordcloud>
            </div>
          </Card>
          <Card style={{width:'50%'}}>
            <div style={{display:'inline-block', margin: 'auto'}}>
              <Radar></Radar>
            </div>
          </Card>
      </div>
    )
  }
}
