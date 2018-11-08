import React from 'react';
import { Menu, Icon, Button, Tag } from 'antd';

import { connect } from 'react-redux';
import { serverUrl } from '../../constants'

const projects = require("../../projects.json")

let moment = require("moment");

export default
  connect((state) => {
    return {
      projectIndex: state.pane.projectIndex //TODO I made a change here from Student to Project
    }
  }, (dispatch) => {
    return {
      setStudentIndex: (index) => dispatch({
        type: "SET_PROJECT_INDEX", //TODO I made a change here from Student to Project
        index: index
      })
    }
  })(
    class DashLeft extends React.Component {
      constructor(props) {
        super(props)
      }

      onLogoClick = () => {
        window.location.href = serverUrl
      }

      render() {
        const project = projects['projects']
        .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0];
        return (
          <div className="Dash-left-container">
            <Menu
              selectedKeys={[(this.props.projectIndex + 1).toString()]}
              onClick={({ item, key, keyPath }) => {
                this.props.setProjectIndex(key - 1)
              }}
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

              {(() => {
                let arr = []
                for (let i = 1; i < projects['projects'].length + 1; i++) {
                  arr.push(<Menu.Item key={i.toString()} style={{
                    height: '10%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    padding: 15
                  }} >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column'
                    }}><Icon type={projects['projects'][i-1]['icon']} theme='outlined' style={{
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
                      }}>{projects['projects'][i - 1]['projectName']}</p>
                    </div>
                  </Menu.Item>)
                }
                return arr
              })()}
            </Menu>
          </div>
        )
      }
    })
