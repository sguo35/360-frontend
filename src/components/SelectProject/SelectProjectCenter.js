import React from 'react';
import { Menu, Icon, Button } from 'antd';

export default class SelectProjectCenter extends React.Component {
  onLogoClick = () => {
    alert("Go to dashboard")
  }

  render() {
    return (
      <div className="Rate-left-container">
        <Menu
          onClick={() => { }}
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

          <Menu.Item key='1' style={{
            height: '10%',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: 15
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}><Icon type='hourglass' theme='outlined' style={{
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
              }}>Attendy</p>
            </div>
          </Menu.Item>

          <Menu.Item key='2' style={{
            height: '10%',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: 15
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}><Icon type='redo' theme='outlined' style={{
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
              }}>360</p>
            </div>
          </Menu.Item>

          <Menu.Item key='3' style={{
            height: '10%',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: 15
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}><Icon type='project' theme='outlined' style={{
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
              }}>Project 3</p>
            </div>
          </Menu.Item>

          <Menu.Item key='4' style={{
            height: '10%',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: 15
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}><Icon type='trophy' theme='outlined' style={{
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
              }}>Final Project</p>
            </div>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

