
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText.trim());
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2 mb-6">
      <Input
        type="text"
        placeholder="Add a todo"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-grow bg-todo-dark-bg text-white border-todo-purple focus-visible:ring-todo-purple"
        required
      />
      <Button 
        type="submit" 
        className="bg-todo-purple hover:bg-todo-dark-purple text-white"
      >
        Add Todo
      </Button>
    </form>
  );
};

export default TaskInput;
