import React from 'react';
import { Menu, Icon, Button, Tag } from 'antd';

export default class RateLeft extends React.Component {
  onLogoClick = () => {
    alert("Go to dashboard")
  }

  render() {
    return (
      <div className="Rate-left-container">
        <Menu
          onClick={() => { }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
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
              }}>Matt Hallac</p>
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
              }}>Matt Hallac</p>
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
              }}>Matt Hallac</p>
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
              }}>Matt Hallac</p>
            </div>
          </Menu.Item>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <Button style={{
              fontSize: 12,
              marginTop: 25,
              backgroundColor: '#f5222d',
              borderColor: '#f5222d'
            }} type='primary'>Due on 11/1/18 at 11:59 pm</Button>
          </div>
        </Menu>
      </div>
    )
  }
}

