import React, {Component} from 'react';

class PromptFillIn extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.startEditing();
  }

  hintText() {
    if (this.state.value !== '') {
      return this.props.hint;
    } else {
      return "\u00A0";
    }
  }

  render () {
    return (
      <span className="prompt-element prompt-element__fillIn">
        <div className="block_left">like when she&nbsp;</div>
        <div contentEditable={true} placeholder={this.props.placeholder} value={this.state.value} onInput={this.handleChange}></div>
      </span>
    );
  }
}

export default PromptFillIn;
