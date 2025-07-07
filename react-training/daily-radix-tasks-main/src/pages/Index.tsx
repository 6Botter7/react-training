import React from "react";
import ToDoContainer from "../components/ToDoContainer";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";
import { Menu } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-todo-blue to-todo-purple flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto bg-todo-dark-bg rounded-lg overflow-hidden shadow-xl">
        <ToDoContainer />
      </div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>My Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Andre</MenubarItem>
            <MenubarItem>Charles</MenubarItem>
            <MenubarItem>Malan</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      
    </div>
  );
};

export default Index;
