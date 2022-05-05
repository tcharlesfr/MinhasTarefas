// import React from 'react';
import { useState } from 'react';
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {v4 as id} from 'uuid'

const App = () => {

  const [tasks, setTask] = useState([
    {
      id:'1',
      title:'estudar programação',
      completed: false,
    },
    {
      id:'2',
      title:'ler livro',
      completed: true,
    }    
  ]);

  const handleTaskClick = (taskId) => {
    const newtasks = tasks.map( (task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task;
    })

    setTask(newtasks);
  }

  const handleTaskAdd = (taskTitle) => { //recebe o titulo da tarefa
    const newTask = [ //cria uma array de objetos já existentes + a nova tarefa
      ...tasks,
      {
        title: taskTitle,
        id: id(),
        completed: false,
      },
    ];

    setTask(newTask);
  }

  return (
    <div>
      <div className="container">
        <AddTask handleTaskAdd={handleTaskAdd} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div>
      
    </div>
  )
};

export default App;