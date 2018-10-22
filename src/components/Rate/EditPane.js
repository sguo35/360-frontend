import React from 'react';

import { Card, Tag, Button } from 'antd';
import Brief from './Brief';
import Prompt from '../Prompt/Prompt';

import { connect } from 'react-redux';
import { store } from '../../redux/store';


export default 
connect(null, null)(
class EditPane extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prompts: [],
      nextReady: false
    };
    store.dispatch({
      type: 'INIT_ADD_PROMPT',
      payload: this.addPrompt
    })
  }

  getInstructions = () => {
    let text, color;
    switch (this.state.prompts.length) {
      case 0:
        text = "Click a choice on the right side to start giving feedback.";
        color = 'grey';
        break;
      case 1:
        text = 'One more prompt required.';
        color = '#f5222d';
        break;
      default:
        text = 'Continue when ready.';
        color = '#52c41a';
    }
    return (
      <p onClick={this.addPrompt} style={{
        color: color,
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none'
      }}>
        {text}
      </p>
    );
  }

  addPrompt = () => {
    this.setState({
      prompts: this.state.prompts.concat([1]),
      nextReady: this.state.prompts.length > 0
    });
  }

  render = () => {
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
            <Button block type='disabled' style={{ flexGrow: 1 }} icon='up'/>
          </div>
          <Card
            style={{
              margin: 20,
              marginRight: 10,
              marginTop: 10,
              marginLeft: 0,
              height:'100%',
              marginBottom: 10
            }}
          >
            <h1>Engagement</h1>
            {
              this.getInstructions()
            }
            {
              this.state.prompts.map( prompt => {
                  return (<Prompt gradedName="Alex"></Prompt>)
            })}
          </Card>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: -20,
            marginLeft: -10
          }}>
            <Button block type={this.state.nextReady ? 'primary' : 'disabled'}  style={{ flexGrow: 1 }} icon={this.state.nextReady ? 'down' : 'close'} />
          </div>
        </div>
      </div>
    )
  }
})
