import React from 'react';
import { Menu, Icon, Button } from 'antd';

import { serverUrl } from '../../constants';

import { projects } from '../Rate/RateLeft';
let moment = require("moment");

export default class SelectProjectCenter extends React.Component {
  onLogoClick = () => {
    window.location.href = serverUrl
  }

  render() {
    return (
      <div className="Rate-left-container">
        <Menu
          mode='vertical'
          theme='dark'
          style={{
            width: 250,
            height: '100%'
          }}
        >
          <Icon type='redo' style={{
            fontSize: 36,
            marginTop: '35%',
            marginLeft: '41%',
            marginRight: '50%',
            marginBottom: 30,
            cursor: 'pointer'
          }} onClick={this.onLogoClick} />
          <p style={{
            textAlign: 'center',
            marginBottom: '35%',
            fontSize: 13,
            letterSpacing: '10px',
            cursor: 'pointer'
          }} onClick={this.onLogoClick}>360FACTORS</p>
          {projects['projects'].map((project) => {
            return (
              <Menu.Item key={project['projectName']} style={{
                  height: '10%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  padding: 15
                }}
                onClick={() => {
                  let dueDate = moment(project['dueDate'], 'MM-DD-YYYY, hh:mm:ss a');
                  if(moment().isBefore(dueDate)) {
                    this.props.history.push("/project/:" + project['projectName'])
                  } else {
                    //this.props.history.push("/dashboard/:" + project['projectName'])
                    this.props.history.push("/processing")
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}><Icon type={project['icon']} theme='outlined' style={{
                  fontSize: 32,
                  marginLeft: 12
                }} />
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                  <p style={{
                    margin: 20,
                    marginTop: 15
                  }}>{project['projectName']}</p>
                </div>
              </Menu.Item>
            )
          })}

        </Menu>
      </div>
    )
  }
}
