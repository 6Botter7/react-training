
import React from "react";
import ToDoContainer from "../components/ToDoContainer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-todo-blue to-todo-purple flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto bg-todo-dark-bg rounded-lg overflow-hidden shadow-xl">
        <ToDoContainer />
      </div>
    </div>
  );
};

export default Index;
