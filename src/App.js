
import { useEffect, useState } from "react"
import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask"



export default function App(){
const Data = [
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
        },
        {
            id: 2,
            text: "Meeting at school",
            day: "Feb 6th at 1:30pm",
            reminder: true
        },
        {
            id: 3,
            text: "Food shopping",
            day: "Feb 7th at 8:00pm",
            reminder: true
        }
    ]

    const [tasks, setTasks] = useState([]);
    const [showTask, setShowTask] = useState(false)
    
    //removing task from the tracker
    const deleteTask = (id) =>{
        setTasks(tasks.filter((task)=> task.id!==id))
    }
    //this toggle reminder state by adding a reminder class
    const toggleReminder = (id) =>{
        setTasks(tasks.map((task)=> {
           return task.id===id? {...task, reminder:!task.reminder}: task
        }))
    }

    //Add task 
    const addTask = (task) =>{
        const id = Math.floor(Math.random()*10000) + 1;
        const newTask = {id, ...task};
        setTasks([...tasks, newTask])
    }



    return (
        <div className="container">
           <Header showTask={()=>{setShowTask(!showTask)}}
           showAdd = {showTask}
           />
           {showTask && <AddTask addTask={addTask}/>}
           {tasks.length > 0 ? <Tasks tasks={tasks} 
           onDelete={deleteTask}
           onToggle = {toggleReminder}
           /> : "No task to dispay"}
        </div>
     
    )
}

