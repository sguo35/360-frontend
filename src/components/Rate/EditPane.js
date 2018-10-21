import React from 'react';

import { Card, Tag } from 'antd';

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
        <Card style={{
          margin: 20,
          marginRight: 10,
          marginTop: 10,
          height: '25%'
        }}>
          <p style={{
            color: 'rgb(200, 200, 200)',
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>Select a choice on the right side to start giving feedback.</p>
        </Card>
      </div>
    )
  }
}