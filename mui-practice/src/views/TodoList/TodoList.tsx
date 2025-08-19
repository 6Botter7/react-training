import React from 'react';
import ToDoListInput from './ToDoListInput';
import ToDoListTaskContainer from './ToDoListTaskContainer';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const addTask = (taskText: string) => {
  if (taskText.trim()) {
    const newTask: Task = {
      id: Date.now(), // Simple unique ID
      text: taskText.trim(),
      completed: false
    };
    setTasks([...tasks, newTask]); // Add to existing tasks
  }
};

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <ToDoListInput onAddTask={addTask} />
      <ToDoListTaskContainer tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}


export default TodoList;