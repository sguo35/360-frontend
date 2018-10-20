import React from 'react';
import './Rate.css';

import { Card, Tag } from 'antd';

export default class SelectPanel extends React.Component {
  render = () => {
    return (
      <div className="Rate-select-panel">
        <Card title="Outstanding"
        className="select-panel-card"
        style={{
          margin: 10,
          overflow: 'scroll',
          maxWidth: '100%',
          overflowX: 'hidden'
        }}
        >
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
          <Tag color='green' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated actively</Tag>
        </Card>


        <Card title="Satisfactory"
        className="select-panel-card"
        style={{
          margin: 10,
          overflow: 'scroll',
          maxWidth: '100%',
          overflowX: 'hidden'
        }}
        >
        <Tag color='lime' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>participated sparingly</Tag>
        </Card>


        <Card title="Needs Improvement"
        className="select-panel-card"
        style={{
          margin: 10,
          overflow: 'scroll',
          maxWidth: '100%',
          overflowX: 'hidden'
        }}
        >
        <Tag color='red' onClick={() => console.log('clicked')} style={{
            marginBottom: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>did not participate</Tag>
        </Card>
      </div>
    )
  }
}