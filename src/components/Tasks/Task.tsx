import * as React from "react";
import './Task.css'

interface TaskProps {
    task: { id: number; text: string };
    onDeleteTask: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = ({ task, onDeleteTask }) => {
    return (
        <div className="task-block">
            <h3>{task.text}</h3>
            <button className="delete-task-btn" onClick={() => onDeleteTask(task.id)}>
                Delete
            </button>
        </div>
    );
};

export default Task;