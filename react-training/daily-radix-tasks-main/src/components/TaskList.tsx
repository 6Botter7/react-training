
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types/Task";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const taskColors = [
  "bg-todo-task-blue",
  "bg-todo-task-brown",
  "bg-todo-task-purple",
  "bg-todo-task-dark-purple",
  "bg-todo-task-navy",
];

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onDelete,
  onEdit,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="text-white/70 text-center py-6">
        No tasks for this day. Add one to get started!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          color={taskColors[index % taskColors.length]}
        />
      ))}
    </div>
  );
};

export default TaskList;
