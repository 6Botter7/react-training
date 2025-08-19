import React from 'react';
import ToDoListInput from './ToDoListInput';
import ToDoListTaskContainer from './ToDoListTaskContainer';
import ToastNotification from '../../components/ToastNotification';
import { useToast } from '../../hooks/useToast';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const { toast, showToastNotification, hideToast } = useToast();

  const addTask = (taskText: string) => {
  if (taskText.trim()) {
    const newTask: Task = {
      id: Date.now(), // Simple unique ID
      text: taskText.trim(),
      completed: false
    };
    setTasks([...tasks, newTask]); // Add to existing tasks
    showToastNotification(`Task "${taskText}" added successfully!`, 'success');
  }
};

  const deleteTask = (id: number) => {
    const taskToDelete = tasks.find(task => task.id === id);
    setTasks(tasks.filter(task => task.id !== id));
    if (taskToDelete) {
      showToastNotification(`Task "${taskToDelete.text}" deleted!`, 'error');
    }
  };

  return (
    <div>
      <ToDoListInput onAddTask={addTask} />
      <ToDoListTaskContainer tasks={tasks} onDeleteTask={deleteTask} />

      <ToastNotification 
        message={toast.message}
        type={toast.type}
        open={toast.open}
        onClose={hideToast}
      />
    </div>
  );
}


export default TodoList;