import React from 'react';
import './Rate.css';

import { Card, Tag } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

export default class SelectPanel extends React.Component {
  render = () => {
    return (
      <div className="Rate-select-panel">
        <Card title="Outstanding"
          className="select-panel-card"
          style={{
            margin: 10,
            maxWidth: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden'
          }}
        >
          <Scrollbars style={{
            width: '100%',
            height: '20vh'
          }}>
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
          </Scrollbars>
        </Card>


        <Card title="Satisfactory"
          className="select-panel-card"
          style={{
            margin: 10,
            maxWidth: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden'
          }}
        >
          <Scrollbars style={{
            width: '100%',
            height: '20vh'
          }}>
            <Tag color='lime' onClick={() => console.log('clicked')} style={{
              marginBottom: 10,
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none'
            }}>participated sparingly</Tag>
          </Scrollbars>
        </Card>


        <Card title="Needs Improvement"
          className="select-panel-card"
          style={{
            margin: 10,
            maxWidth: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden'
          }}
        >
          <Scrollbars style={{
            width: '100%',
            height: '20vh'
          }}>
            <Tag color='red' onClick={() => console.log('clicked')} style={{
              marginBottom: 10,
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none'
            }}>did not participate</Tag>
          </Scrollbars>
        </Card>
      </div>
    )
  }
}