import React from 'react';
import { Menu, Icon } from 'antd';

export default class RateLeft extends React.Component {
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
            fontSize: 48,
            marginTop: '35%',
            marginLeft: '41%',
            marginRight: '50%',
            marginBottom: 30
          }} />
          <p style={{
            textAlign: 'center',
            marginBottom: '35%',
            fontSize: 18,
          }}>360 Factors</p>

          <Menu.Item key='1' style={{
            height: 100,
            display: 'flex',
            justifyContent: 'space-around',
            padding: 15
          }}>
            <Icon type='user' theme='outlined' style={{
              fontSize: 32,
              marginLeft: 12,
              marginTop: 18
            }} />
            <p style={{
              margin: 20,
              marginTop: 15
            }}>Person 1</p>
          </Menu.Item>

          <Menu.Item key='2' style={{
            height: 100,
            display: 'flex',
            justifyContent: 'space-around',
            padding: 15
          }}>
            <Icon type='user' theme='outlined' style={{
              fontSize: 32,
              marginLeft: 12,
              marginTop: 18
            }} />
            <p style={{
              margin: 20,
              marginTop: 15
            }}>Person 2</p>
          </Menu.Item>

          <Menu.Item key='3' style={{
            height: 100,
            display: 'flex',
            justifyContent: 'space-around',
            padding: 15
          }}>
            <Icon type='user' theme='outlined' style={{
              fontSize: 32,
              marginLeft: 12,
              marginTop: 18
            }} />
            <p style={{
              margin: 20,
              marginTop: 15
            }}>Person 3</p>
          </Menu.Item>

          <Menu.Item key='4' style={{
            height: 100,
            display: 'flex',
            justifyContent: 'space-around',
            padding: 15
          }}>
            <Icon type='user' theme='outlined' style={{
              fontSize: 32,
              marginLeft: 12,
              marginTop: 18
            }} />
            <p style={{
              margin: 20,
              marginTop: 15
            }}>Person 4</p>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

