import React from 'react';
import './Rate.css';

import { Card, Tag, Divider } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import {Droppable} from 'react-beautiful-dnd';

import Brief from "./Brief";

export default class SelectPanel extends React.Component {
  render = () => {
    return (
      <div className="Rate-select-panel">
        <Card
          className="select-panel-card"
          style={{
            margin: 10,
            maxWidth: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden'
          }}
        >
          <div>
            <Scrollbars style={{
              width: '100%',
              height: '25vh'
            }}>
            </Scrollbars>
            <Droppable droppableId="wordbank-good">
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Brief></Brief>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Divider />

            <div
              className="select-panel-card"
              style={{
                maxWidth: '100%',
                overflowX: 'hidden',
                overflowY: 'hidden'
              }}
            >
              <Scrollbars style={{
                width: '100%',
                height: '25vh'
              }}>
                <Tag color='lime' onClick={() => console.log('clicked')} style={{
                  marginBottom: 10,
                  userSelect: 'none',
                  MozUserSelect: 'none',
                  WebkitUserSelect: 'none'
                }}>participated sparingly</Tag>
              </Scrollbars>
            </div>

            <Divider />
            <div
              className="select-panel-card"
              style={{
                maxWidth: '100%',
                overflowX: 'hidden',
                overflowY: 'hidden'
              }}
            >
              <Scrollbars style={{
                width: '100%',
                height: '25vh'
              }}>
                <Tag color='red' onClick={() => console.log('clicked')} style={{
                  marginBottom: 10,
                  userSelect: 'none',
                  MozUserSelect: 'none',
                  WebkitUserSelect: 'none'
                }}>did not participate</Tag>
              </Scrollbars>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
