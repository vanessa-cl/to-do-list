import React, { useState, useRef } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import NewToDo from "../NewToDo/NewToDo";

export default function ToDoMenu({ onEdit, onDelete }) {
  const menu = useRef(null);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = [
    {
      label: "Edit",
      icon: "pi pi-pencil",
      command: () => { }
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => { onDelete() }
    },
    {
      label: "New To Do",
      icon: "pi pi-plus",
      command: () => { }
    }
  ]

  return (
    <>
      <Menu model={items} popup ref={menu} />
      <Button icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} />
    </>
  )
}