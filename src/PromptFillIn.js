import React, {Component} from 'react';

class PromptFillIn extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.hint};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {
    return (
       <input type="text" style={{display : 'flex'}}value={this.state.value} onChange={this.handleChange}></input>
    );
  }
}

export default PromptFillIn;
