import './Form.css';
import React from 'react';

class Form extends React.Component {

  
  formSubmit = (e) => {
    e.preventDefault();
    const task = e.target.newTaskText.value;
    this.props.addNewTask(task);
  };


  render() {
    return (
      <form onSubmit={(e) => this.formSubmit(e)}>
        <input type="text" name="newTask" id="newTaskText" />
        <input type="submit" value="Añadir Tarea" />
      </form>
    );
  }
}

export default Form;
