import React from 'react';

import EditPane from './EditPane';
import SelectPanel from './SelectPanel';
import './Rate.css';

import { Progress } from 'antd';
import { DragDropContext } from 'react-beautiful-dnd';

export default class RateRight extends React.Component {
  onDragEnd = () => {

  }
  render = () => {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="Rate-right-container" style={{
          padding: 10
        }}>
          <EditPane match={this.props.match} firstBugCatch={this.props.firstBugCatch}/>
          <SelectPanel />
        </div>
      </DragDropContext>
    )
  }
}
