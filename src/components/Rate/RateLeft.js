import React from 'react';
import { Menu, Icon, Button, Tag } from 'antd';

import { connect } from 'react-redux';
import { serverUrl } from '../../constants';

export let projects = require("../../projects.json")

let moment = require("moment");

export default
  connect((state) => {
    return {
      studentIndex: state.pane.studentIndex,
      email: state.info.emails.length > 0 ? state.info.emails[0].value : ""
    }
  }, (dispatch) => {
    return {
      setStudentIndex: (index) => dispatch({
        type: "SET_STUDENT_INDEX",
        index: index
      })
    }
  })(
    class RateLeft extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          unlocked: {}
        }
      }
      onLogoClick = () => {
        window.location.href = serverUrl
      }

      componentWillReceiveProps = (nextProps) => {
        if (nextProps.studentIndex !== this.props.studentIndex) {
          const newUnlocked = this.state.unlocked
          newUnlocked[this.props.studentIndex + 1] = true
          this.setState({
            unlocked: newUnlocked
          })
        }

        const team = projects['projects']
        .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0]['teams'].filter((team) => team['memberEmails'].includes(this.props.email))
        if (team[0]['memberEmails'][this.props.studentIndex] === this.props.email){
            this.props.setStudentIndex(this.props.studentIndex + 1)
        }
      }

      render() {
        const dueDate = moment(
          projects['projects']
          .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
          [0]['dueDate'],
          'MM-DD-YYYY, hh:mm:ss a');

        console.log(this.props.match.params.projectId)
        console.log(this.props.email)
        const team = projects['projects']
        .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0]['teams'].filter((team) => team['memberEmails'].includes(this.props.email))

        if (team[0]['memberEmails'][this.props.studentIndex] === this.props.email){
          this.props.setStudentIndex(this.props.studentIndex + 1)
        }

        console.log(team)
        return (
          <div className="Rate-left-container">
            <Menu
              selectedKeys={[(this.props.studentIndex + 1).toString()]}
              onClick={({ item, key, keyPath }) => {

              }}
              mode='vertical'
              theme='dark'
              style={{
                width: 250,
                height: '100%',
                cursor: 'default'
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
                for (let i = 1; i < team[0]['memberNames'].length + 1; i++) {
                  if (team[0]['memberEmails'][i - 1] !== this.props.email)
                  arr.push(<Menu.Item key={i.toString()} style={{
                    height: '10%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    padding: 15,
                    cursor: 'default'
                  }} >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column'
                    }}><Icon type='user' theme='outlined' style={{
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
                      }}>{team[0]['memberNames'][i - 1]}</p>
                    </div>
                  </Menu.Item>)
                }
                return arr
              })()}


              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
              }}>
                <Button style={{
                  cursor: 'auto',
                  fontSize: 12,
                  marginTop: 25,
                  backgroundColor: '#f5222d',
                  borderColor: '#f5222d'
                }} type='primary'>{`Due on ${dueDate.format('ddd MM/DD, hh:mm a')}`}</Button>
              </div>
            </Menu>
          </div>
        )
      }
    })
