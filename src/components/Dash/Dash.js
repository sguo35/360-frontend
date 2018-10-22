import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import DashLeft from './DashLeft';
import DashRight from './DashRight';
import './Dash.css';

export default class Dash extends React.Component {
  render = () => {
    return (
      <div className="Dash-parent-container">
          <DashLeft />
          <DashRight/>
      </div>
    );
  }
}
