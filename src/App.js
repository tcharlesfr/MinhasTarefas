// import React from 'react';
import { useState } from 'react';
import './App.css'
import Tasks from './components/Tasks'

const App = () => {

  const [tasks, setTask] = useState([
    {
      id:'1',
      title:'estudar programação',
      complete: false,
    },
    {
      id:'2',
      title:'ler livro',
      complete: true,
    }    
  ])

  return (
    <div>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
      
    </div>
  )
};

export default App;