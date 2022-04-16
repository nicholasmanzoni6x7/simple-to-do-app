import React, {useState} from 'react';
import Tasks from './components/Tasks.jsx'
import TaskAdder from './components/TaskAdder.jsx'
import './App.css';

function App() {
  
  const [tasks, setTasks] = useState([{
        content: "Let's do it :)", finshed: false}
      ]
    );
  return (
    <div className="App">
      <TaskAdder tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
