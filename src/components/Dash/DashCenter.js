import React from 'react';

import { Card, Tag, Button, Icon, Row, Col, Tabs } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import { connect } from 'react-redux';
import { store } from '../../redux/store';

import Wordcloud from './Wordcloud';
import Radar from './RadarChart';

const TabPane = Tabs.TabPane;

export default class DashCenter extends React.Component {
  constructor (props) {
    super(props);
  }
  render = () => {
    let cardStyle = {
      alignItems: 'center'
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
      <Scrollbars autoHide={true} renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
      style={{
        width: '100%',
        height: '100%'
      }}>
      <div className="Dash-center-pane">
        <Row gutter={16} type="flex" justify="center" style={{marginBottom : 16}}>
          <Col span={20}>
            <Card>
              <h1 style={{ textAlign: 'center', margin: 0}}>
                Welcome <span style={{color:'#096dd9'}}>Gwynevere</span>
              </h1>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} type="flex" justify="center" style={{marginBottom : 16}}>
          <Col span={10}>
            <Card style={cardStyle}>
              <Wordcloud text={text}></Wordcloud>
            </Card>
          </Col>
          <Col span={10}>
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
          </Col>
        </Row>
        <Row gutter={16} type="flex" justify="center" style={{marginBottom : 16}}>
          <Col span={20}>
            <Card>
              <h2 style={{textAlign: 'center', marginBottom: 20}}>
                Team Member Feedback
              </h2>
              <Tabs tabPosition="left" size="large">
                <TabPane tab={<p style={{width: 120}}>Leadership</p>} key="1">
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                </TabPane>
                <TabPane tab={<p style={{width: 120}}>Productivity</p>} key="2">
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                </TabPane>
                <TabPane tab={<p style={{width: 120}}>Engagement</p>} key="3">
                <div>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                  <p>This is a feedback about a certain characteristic of Matt. Matt is a really great example of that precise characteristic, which is why I took the time to write this sentence.</p>
                </div>
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
      </Scrollbars>
    )
  }
}
