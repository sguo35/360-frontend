import React, { Component } from 'react';
import ContentEditable from "react-contenteditable";

class PromptFillIn extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.placeholder };
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === 'Paste') {
      console.log('do validate');
      event.preventDefault();
    }
  }

  handleChange(event) {
    this.props.startEditing();
    this.props.edit(this.props.idx, event.target.value)
    this.setState({ value: event.target.value });
  }

  hintText() {
    if (this.state.value !== '') {
      return this.props.hint;
    } else {
      return "\u00A0";
    }
  }

  render() {
    return (
      <span className="prompt-element prompt-element__fillIn">
        <ContentEditable
          onChange={this.handleChange}
          onPaste={(event) => { event.preventDefault() }}
          onCut={(event) => { event.preventDefault() }}
          onCopy={(event) => { event.preventDefault() }}
          onClick={() => {
            this.setState({
              value: this.state.value !== this.props.placeholder ? this.state.value : ''
            })
          }}
          onBlur={() => {
            this.setState({
              value: this.state.value === '' ? this.props.placeholder : this.state.value
            })
          }}
          html={this.state.value}
          tagName="span"
          style={{
            color: this.state.value ? 'grey' : 'rgb(200, 200, 200)',
            display: this.state.value ==='' ? 'inline-block' : 'inline',
            textDecoration: 'underline',
            minWidth: this.state.value === '' ? 100 : 0
          }}
        >
        </ContentEditable>
      </span>
    );
  }
}

export default PromptFillIn;
