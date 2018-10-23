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
    let cardStyle = {
      alignItems: 'center',
      margin: 20
    };
    let text = "Gwynevere actively communicates outside of emailings, and is easy to get ahold of. Gwynevere is always ready to email and will take simple off of his schedule and this clean our cloud in terms of cloud transparent and getting stuff done. Gwynevere offers great insight and perspective to cloud goals and discussions such as when he/she proposed to angle our project towards an easier implementation for the user, moving the forward. Gwynevere stepped out of their comfort zone by taking on the challenge of AngularJS, efficiently learning and transparenting on a new skill even though it may have been new or hard for them.Gwynevere’s engagement of transparent is outstanding because he/she takes whatever amount of simple to create a engagement product .The execution of the website created as well as the Attendy app and its functions shows extraordinary effort and thought, and it is delivered in a simple improvement. Gwynevere consistently  sets up email and listens to others, which is something not many others are willing to take on or do. It is beneficial to the because it propels the cloud forward because it builds a sense of trust. Gwynevere is always looking to push himself technically and this tendency to create and develop in this improvement clean our progress/cloud dynamic by expanding what our cloud is capable of accomplishing and what we can incorporate.";
    var personLeadership = .6;
    var personEngagement = .7;
    var personProductivity = .3;
    var allLeadership = .9;
    var allEngagement = .2;
    var allProductivity = .6;

    personLeadership = Math.sqrt(personLeadership);
    personEngagement = Math.sqrt(personEngagement);
    personProductivity = Math.sqrt(personProductivity);
    allLeadership = Math.sqrt(allLeadership);
    allEngagement = Math.sqrt(allEngagement);
    allProductivity = Math.sqrt(allProductivity);

    return (
      <div className="Dash-center-pane">
        <div className="Dash-header">
          <Card>
            <h1 style={{fontSize:50, textAlign: 'center', margin: 0}}>
              Welcome <span style={{color:'#096dd9'}}>Gwynevere</span>
            </h1>
          </Card>
        </div>
        <div className="Dash-graph-row">
          <Card style={cardStyle}>
            <Wordcloud text={text}></Wordcloud>
          </Card>
          <Card style={cardStyle}>
            <Radar
              myLeadership={personLeadership}
              myEngagement={personEngagement}
              myProductivity={personProductivity}
              teamLeadership={allLeadership}
              teamEngagement={allEngagement}
              teamProductivity={allProductivity}
            ></Radar>
          </Card>
        </div>
      </div>
    )
  }
}
