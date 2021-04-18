import './Task.css';
import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.tarea = props.tarea.title;
    this.id = props.tarea.id;
  }

  render() {
    return (
      <li className="task" onClick={() => this.props.clickFunction(this.tarea)}>
        {this.tarea}
      </li>
    );
  }
}

export default Task;
