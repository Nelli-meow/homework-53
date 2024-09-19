import * as React from "react";
import './AddTaskForm.css';

interface AddTaskFormProps {
    currentTask: string;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onAddTask: React.MouseEventHandler;
}
const AddTaskForm: React.FC<AddTaskFormProps> = ({ currentTask, onInputChange, onAddTask }) => {
    return (
        <div className="add-task-form">
            <input
                type="text"
                className="add-task-form-input"
                placeholder="Add task"
                value={currentTask}
                onChange={onInputChange}
            />
            <button className="add-task-form-btn" onClick={onAddTask}>
                Add Task
            </button>
        </div>
    );
};

export default AddTaskForm;