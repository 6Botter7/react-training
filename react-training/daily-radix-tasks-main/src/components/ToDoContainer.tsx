
import React, { useState, useEffect } from "react";
import DaySelector from "./DaySelector";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { Task } from "../types/Task";

const ToDoContainer: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [tasksByDay, setTasksByDay] = useState<Record<string, Task[]>>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasksByDay");
    if (savedTasks) {
      setTasksByDay(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasksByDay", JSON.stringify(tasksByDay));
  }, [tasksByDay]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    setTasksByDay((prev) => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], newTask],
    }));
  };

  const toggleTaskComplete = (id: string) => {
    setTasksByDay((prev) => ({
      ...prev,
      [selectedDay]: prev[selectedDay].map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  const deleteTask = (id: string) => {
    setTasksByDay((prev) => ({
      ...prev,
      [selectedDay]: prev[selectedDay].filter((task) => task.id !== id),
    }));
  };

  const editTask = (id: string, newText: string) => {
    setTasksByDay((prev) => ({
      ...prev,
      [selectedDay]: prev[selectedDay].map((task) =>
        task.id === id ? { ...task, text: newText } : task
      ),
    }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-white text-left">
        What's the Plan for Today?
      </h1>
      
      <div className="mb-6">
        <DaySelector selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      </div>
      
      <TaskInput onAddTask={addTask} />
      
      <TaskList
        tasks={tasksByDay[selectedDay]}
        onToggleComplete={toggleTaskComplete}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
};

export default ToDoContainer;
