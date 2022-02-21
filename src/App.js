import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState([
    {
     id: 1,
     text: 'Doctors Appointment',
     day: 'Feb 9th at 07:30pm',
     reminder: 'true',       
    },
    {
        id: 2,
        text: 'School Appointment',
        day: 'Feb 6th at 02:30pm',
        reminder: 'true',       
    },
    {
        id: 3,
        text: 'College Appointment',
        day: 'Feb 8th at 12:30pm',
        reminder: 'true',       
    },   
])
// Delete Task
const deleteTask = (id) =>{
  
}
  return (
    <div className='container'>
        <Header title = "Task Tracker"/>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
