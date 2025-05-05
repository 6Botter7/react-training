
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { X, Edit } from "lucide-react";
import { cn } from "@/lib/utils";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  color: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onDelete,
  onEdit,
  color
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      onEdit(task.id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && editText.trim()) {
      onEdit(task.id, editText);
      setIsEditing(false);
    } else if (e.key === "Escape") {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  return (
    <div 
      className={cn(
        "flex items-center justify-between p-3 rounded-md mb-2",
        color
      )} 
      style={{ transition: "all 0.2s ease" }}
    >
      <div className="flex items-center gap-3 flex-grow">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggleComplete(task.id)}
          className="bg-white"
        />
        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              if (editText.trim()) {
                onEdit(task.id, editText);
              }
              setIsEditing(false);
            }}
            className="flex-grow bg-white/20 text-white border-white/30"
            autoFocus
          />
        ) : (
          <span 
            className={cn(
              "text-white flex-grow text-left",
              task.completed && "line-through text-white/60"
            )}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 text-white">
        <button
          onClick={handleEdit}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Edit task"
        >
          <Edit className="h-4 w-4" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Delete task"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
