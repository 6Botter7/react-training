
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DaySelectorProps {
  selectedDay: string;
  onSelectDay: (day: string) => void;
}

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDay, onSelectDay }) => {
  return (
    <div className="w-full max-w-xs">
      <Select value={selectedDay} onValueChange={onSelectDay}>
        <SelectTrigger className="w-full bg-todo-dark-bg text-white border-todo-purple">
          <SelectValue placeholder="Select a day" />
        </SelectTrigger>
        <SelectContent className="bg-todo-dark-bg text-white border-todo-purple">
          {days.map((day) => (
            <SelectItem key={day} value={day} className="focus:bg-todo-purple focus:text-white">
              {day}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DaySelector;
