import React, { useState } from 'react';


const TaskAdder = (props) => {
    const [nuTask, setNuTask] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        const oneTask = {
            content: nuTask,
            finished: false
        }
        
        props.setTasks([...props.tasks, oneTask]);
        setNuTask("");
    };
    const handleTask = (e) => {
        setNuTask(e.target.value);
    };


    return (
        <div>
            <form onSubmit={addTask}>
                <label>Add Task: </label>
                <input type="text" onChange={handleTask} value={nuTask} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TaskAdder;