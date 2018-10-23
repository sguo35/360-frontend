import React, { Component } from 'react';
import { Tag } from 'antd';
import './PromptUI.css';

import PromptFillIn from './PromptFillIn';

import { connect } from 'react-redux';

export default
  connect((state) => {
    return {
      deletePrompt: state.pane.deletePrompt
    }
  })(
    class Prompt extends Component {
      constructor(props) {
        super(props);
        this.state = {
          startedEditing: false,
          closing: false
        };
      }

      handleClose = (event) => {
        console.log("TEST1")
        this.props.deletePrompt(this.props.prompt)
        this.setState({ closing: true });
        console.log("TEST2")
      }

      startEditing = () => {
        this.setState({ startedEditing: true });
      }

      yieldElement = (element, index) => {
        let nextElement;
        var opts = {
          key: index
        };

        switch (element.type) {
          case 'gradedName':
            if (this.state.startedEditing) {
              nextElement = <span key={Math.random()} className="prompt-element prompt-element__name" {...opts}>{this.props.gradedName}</span>;
            } else {
              nextElement = <span  key={Math.random()} className="prompt-element prompt-element__name prompt-element__name-placeholder" {...opts}>{element.placeholder}</span>;
            }
            break;
          case 'fillIn':
            nextElement = <PromptFillIn  key={Math.random()} placeholder={element.placeholder} hint={element.hint} startEditing={this.state.startedEditing}></PromptFillIn>;
            break;
          case 'text':
          default:
            nextElement = <span  key={Math.random()} className="prompt-element prompt-element__text" {...opts}>{element.value}</span>
            break;
        }
        return nextElement;
      }

      render() {
        let tagStyle = {
          whiteSpace: 'normal',
          overflow: 'hidden',
          display: 'inline-flex',
          marginBottom: 15,
          height: 'auto'
        };


        return (
          <Tag className="prompt-tag" closable
            onClose={this.handleClose} afterClose={() => this.setState({ closing: false })}
            style={tagStyle} key={this.props.prompt.uniqueId}>
            <div className="prompt-oval">
              {(this.props.prompt ? this.props.prompt.elements : []).map(this.yieldElement)}
            </div>
          </Tag>
        );
      }
    }
  )