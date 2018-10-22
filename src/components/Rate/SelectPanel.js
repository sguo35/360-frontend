import React from 'react';
import './Rate.css';

import { Card, Tag, Divider } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import Brief from "./Brief";

import { connect } from 'react-redux';


const samples = [
  {
  "id": "promptP0",
  "ovalTemplate": "oval0",
  "shortForm": "Willing to learn new things",
  "level": 3,
  "elements": [
      {
        "type" : "gradedName",
        "placeholder" : "Outstanding Student"
      },
      {
        "type" : "text",
        "value" :"\u00A0stepped out of their comfort zone by taking on the challenge of\u00A0"
      },
      {
        "type" : "fillIn",
        "placeholder" : "learning to write JSON",
        "value" : ""
      },
      {
        "type" : "text",
        "value" : ", efficiently learning and working on a new skill even though it may have been new or hard for them."
      }
    ]
  },
  {
  "id": "promptP1",
  "ovalTemplate": "oval0",
  "shortForm": "Continuously delivers (also timely)",
  "level": 2,
  "elements": [
      {
        "type" : "gradedName",
        "placeholder" : "Outstanding Student"
      },
      {
        "type" : "text",
        "value" :"\u00A0quality of work is outstanding because he/she\u00A0"
      },
      {
        "type" : "fillIn",
        "placeholder" : "coded a fully functioning app in less than two weeks",
        "value" : ""
      },
      {
        "type" : "text",
        "value" : ". Their execution shows extraordinary effort and thought, and it is delivered in a timely manner."
      }
    ]
  },
  {
  "id": "promptP2",
  "ovalTemplate": "oval0",
  "shortForm": "Exemplifies extraordinary work by...",
  "level": 1,
  "elements": [
      {
        "type" : "gradedName",
        "placeholder" : "Outstanding Student"
      },
      {
        "type" : "text",
        "value" :"\u00A0executes at an extraordinary level. \u00A0"
      },
      {
        "type" : "gradedName",
        "placeholder" : "Outstanding Student"
      },
      {
        "type" : "text",
        "value" :"\u00A0went above and beyond by\u00A0"
      },
      {
        "type" : "fillIn",
        "placeholder" : "learning a new language and then incorporating it to create a high functioning and stylistic webpage",
        "value" : ""
      }
    ]
  }
]

export default 
connect(null, null) (
class SelectPanel extends React.Component {

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
              <Brief prompt={samples[0]}
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
                <Brief prompt={samples[1]}
              >
              </Brief>
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
                <Brief prompt={samples[2]}
              >
              </Brief>
              </Scrollbars>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
)