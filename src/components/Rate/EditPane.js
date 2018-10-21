import React from 'react';

import { Card, Tag, Button } from 'antd';

export default class EditPane extends React.Component {
  render() {
    return (
      <div className="Rate-edit-pane">
        <Card
          style={{
            margin: 20,
            marginRight: 10,
            marginTop: 10,
            height: 85,
            backgroundColor: '#001529'
          }} >
          <p style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'white'
          }}><b>Rate Matt's engagement on the Attendy project.</b></p>
        </Card>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          marginRight: 10,
          marginBottom: 0,
          marginLeft: 20
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 10,
            paddingBottom: 10,
            marginRight: -30,
            zIndex: 1
          }}>
            <Button block type='disabled' style={{ flexGrow: 1 }} icon='left' />
          </div>
          <Card style={{
            margin: 20,
            marginRight: 10,
            marginTop: 10,
            flexGrow: 2,
            marginBottom: 10
          }}>
            <p style={{
              color: 'rgb(200, 200, 200)',
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none'
            }}>Select a choice on the right side to start giving feedback.</p>
          </Card>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 10,
            paddingBottom: 10,
            marginLeft: -13
          }}>
            <Button block type='primary' style={{ flexGrow: 1 }} icon='right' />
          </div>
        </div>
      </div>
    )
  }
}