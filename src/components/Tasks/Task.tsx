import * as React from "react";
import './Task.css'

interface TaskProps {
    task: { id: number, text: string },
    onDeleteTask: () => void,
    key: number,
}

const Task: React.FC<TaskProps> = ({task, onDeleteTask, key}) => {
    return (
        <div className="task-block">
            <h3>{task.text}</h3>
            <button className="delete-task-btn" onClick={onDeleteTask} type="button">
                Delete
            </button>
        </div>
    );
};

export default Task;