import React from 'react';
import './Rate.css';

import { Card, Tag, Divider } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

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
              <Brief prompt={{
                  id: "promptP0",
                  level: 3,
                  ovalTemplate: "oval0",
                  shortForm: "Unwilling to adapt to changes",
                  elements: [
                    {
                      type : "gradedName",
                      placeholder : "Outstanding Student"
                    },
                    {
                      type : "text",
                      value :"\u00A0stepped out of their comfort zone by taking on the challenge of\u00A0"
                    },
                    {
                      type : "fillIn",
                      placeholder : "learning to write JSON",
                      value : ""
                    },
                    {
                      type : "text",
                      value : ", efficiently learning and working on a new skill even though it may have been new or hard for them."
                    }
                  ]
                }}
              >
              </Brief>

            </Scrollbars>

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
                <Tag color='gold' onClick={() => console.log('clicked')} style={{
                  marginBottom: 10,
                  userSelect: 'none',
                  MozUserSelect: 'none',
                  WebkitUserSelect: 'none'
                }}>Participated infrequently</Tag>
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
