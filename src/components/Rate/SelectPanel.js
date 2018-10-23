import React from 'react';
import './Rate.css';

import { Card, Tag, Divider } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import Brief from "./Brief";

import { connect } from 'react-redux';

const prmpts = require('../../prompts.json')
const promptTemplateLookup = {}

for (let element of prmpts.ovalTemplates) {
  promptTemplateLookup[element.id] = {...element}
}

const samples = prmpts.ovalVariants.map((variant) => {
  const out = {...variant}
  let level;
  if (promptTemplateLookup[variant.ovalTemplate].level === "Outstanding") {
    level = 3
  } else if (promptTemplateLookup[variant.ovalTemplate].level === "Satisfactory") {
    level = 2
  } else {
    level = 1
  }
  out['level'] = level

  let category;
  if (promptTemplateLookup[variant.ovalTemplate].category === "productivity") {
    category = 2
  } else if (promptTemplateLookup[variant.ovalTemplate].category === "leadership") {
    category = 1
  } else {
    category = 3
  }
  out['category'] = category
  return out
})

export default 
connect((state) => {
  return {
    questionIndex: state.pane.questionIndex
  }
}, null) (
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
            {samples.filter((sample) => sample.level === 3 && sample.category === this.props.questionIndex + 1).map((sample) => {
              return (
                <Brief prompt={sample}
              >
              </Brief>
              )
            })}
              

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
                {samples.filter((sample) => sample.level === 2 && sample.category === this.props.questionIndex + 1).map((sample) => {
              return (
                <Brief prompt={sample}
              >
              </Brief>
              )
            })}
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
                {samples.filter((sample) => sample.level === 1 && sample.category === this.props.questionIndex + 1).map((sample) => {
              return (
                <Brief prompt={sample}
              >
              </Brief>
              )
            })}
              </Scrollbars>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
)