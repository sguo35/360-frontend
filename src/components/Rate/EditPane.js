import React from 'react';

import { Card, Tag, Button } from 'antd';

export default class EditPane extends React.Component {
  render() {
    return (
      <div className="Rate-edit-pane">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          marginRight: 0,
          marginBottom: 10,
          marginLeft: 20,
          marginTop: 10
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: -13,
            marginLeft: -10,
            zIndex: 1
          }}>
            <Button block type='disabled' style={{ flexGrow: 1 }} icon='up' />
          </div>
          <Card style={{
            margin: 20,
            marginRight: 10,
            marginTop: 10,
            marginLeft: 0,
            flexGrow: 2,
            marginBottom: 10
          }}>
            <h1>Engagement</h1>
            <p style={{
              color: 'rgb(200, 200, 200)',
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none'
            }}>Select a choice on the right side to start giving feedback.</p>
            <p style={{
              color: 'red',
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none',
              fontSize: 12
            }}>Additional feedback required.</p>
          </Card>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: -20,
            marginLeft: -10
          }}>
            <Button block type='primary' style={{ flexGrow: 1 }} icon='down' />
          </div>
        </div>
      </div>
    )
  }
}