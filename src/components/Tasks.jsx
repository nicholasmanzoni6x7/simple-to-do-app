import React from 'react';

const Tasks = (props) => {
    const { tasks, setTasks } = props;

    const handleDone = (idx) => {
        const updatedTasks = tasks.map((task, i) => {
            if (idx === i) {
                const updatedTask = { ...task, finished: !task.finished };
                return updatedTask;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleDelete = (delIdx) => {
        const filteredTasks = tasks.filter((task, i) => {
            return i !== (delIdx)
        });
        setTasks(filteredTasks);
    }

    return (
        <div>
            <h2>To Do</h2>
            {
                props.tasks.map((task, i) => (

                    <div key={i}>
                        <input type="checkbox" onChange={(e) => {
                            handleDone(i);
                        }} checked={task.finished} />
                        <span style={{ textDecoration: task.finished && 'line-through' }}> {task.content} </span>
                        <button onClick={(e) => {
                            handleDelete(i)
                        }}> Delete </button>
                    </div>
                ))
            }
        </div>
    );
}

export default Tasks;