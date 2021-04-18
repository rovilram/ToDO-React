import './Main.css';
import React from 'react';
import Task from '../Task/Task';
import Form from '../Form/Form';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tareas: [
        'comprar el pan',
        'respirar lo máximo posible',
        'tratar de levantarse a mear de vez en cuando',
        'sobrevivir',
        'aprender React',
      ],
    };
  }

  killTask = (task) => {
    this.setState((prevState) => ({
      tareas: prevState.tareas.filter((tarea) => tarea !== task),
    }));
  };

  
  drawTasks = (tasks) => {
    const tareasArray = tasks.map((task, taskIndex) => (
      <Task
      key={task}
      tarea={{
        title: task,
        id: taskIndex,
      }}
      clickFunction={this.killTask}
      />
      ));
      return tareasArray;
    };
    
    addNewTask = (task) => {
      this.setState((prevState) => ({
        tareas: [...prevState.tareas, task]
      }))
    }
    
    render() {
    return (
      <main>
        <Form addNewTask={this.addNewTask} />
        <ul className="tasks">{this.drawTasks(this.state.tareas)}</ul>
      </main>
    );
  }
}

export default Main;
