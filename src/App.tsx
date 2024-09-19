import { useState } from 'react';
import './App.css';
import AddTaskForm from './components/Forms/AddTaskForm';
import Task from "./components/Tasks/Task";

interface Task {
    id: number;
    text: string;
}

const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, text: "Buy milk" },
        { id: 2, text: "Walk with dog" },
        { id: 3, text: "Do homework" }
    ]);

    const [currentTask, setCurrentTask] = useState<string>("");

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(e.target.value);
    };

    const addTask = () => {
        if (currentTask !== "") {
            const newTask = { id: tasks.length + 1, text: currentTask };
            setTasks([...tasks, newTask]);
            setCurrentTask("");
        }
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <>
            <AddTaskForm
                currentTask={currentTask}
                onInputChange={getInputValue}
                onAddTask={addTask}
            />
            <div className="task-list">
                {tasks.map(task => (
                    <Task key={task.id} task={task} onDeleteTask={deleteTask} />
                ))}
            </div>
        </>
    );
};

export default App;
