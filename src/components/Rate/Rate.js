import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import RateLeft from './RateLeft';
import RateRight from './RateRight';
import './Rate.css';

export default class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstBugCatch : false};
  }

  setFirstBugFlag = () => {
    this.setState({firstBugCatch : false});
  }

  render = () => {
    return (
      <div className="Rate-parent-container">
          <RateLeft match={this.props.match} setFirstBugFlag={}/>
          <RateRight match={this.props.match} firstBugCatch={this.state.firstBugCatch}/>
      </div>
    );
  }
}
