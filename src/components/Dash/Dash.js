import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import DashLeft from './DashLeft';
import DashRight from './DashRight';
import './Dash.css';

import { connect } from 'react-redux';
import { serverUrl } from '../../constants';
import { Card, Tag, Button, Icon, Row, Col, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default 
connect((state) => {
  return {
    email: state.info.emails.length > 0 ? state.info.emails[0].value : ""
  }
}, null)(
class Dash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grades: []
    }
  }

  componentDidMount = async () => {
    let grades = await fetch(`${serverUrl}/getFeedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.props.email,
        project: this.props.match.params.projectId
      })
    })
    grades = await grades.json()
    this.setState({
      grades: grades
    })
  }

  render = () => {
    console.log(this.state.grades)
    return (
      <div className="Dash-parent-container">
          <Card>
              <h2 style={{textAlign: 'center', marginBottom: 20}}>
                Team Member Feedback
              </h2>
              <Tabs tabPosition="left" size="large">
                <TabPane tab={<p style={{width: 120}}>Leadership</p>} key="1">
                  {this.state.grades.map((grade) => {
                    return (
                      <div>
                        {grade["leadership"]["qualitative"].map((feedback) => {
                          return (
                            <p>{feedback}</p>
                          )
                        })}
                      </div>
                    )
                  })}
                </TabPane>
                <TabPane tab={<p style={{width: 120}}>Productivity</p>} key="2">
                {this.state.grades.map((grade) => {
                    return (
                      <div>
                        {grade["productivity"]["qualitative"].map((feedback) => {
                          return (
                            <p>{feedback}</p>
                          )
                        })}
                      </div>
                    )
                  })}
                </TabPane>
                <TabPane tab={<p style={{width: 120}}>Engagement</p>} key="3">
                <div>
                {this.state.grades.map((grade) => {
                    return (
                      <div>
                        {grade["engagement"]["qualitative"].map((feedback) => {
                          return (
                            <p>{feedback}</p>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
                </TabPane>
              </Tabs>
            </Card>
      </div>
    );
  }
})