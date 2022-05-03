import React, { useState } from "react";
import NewToDo from "../NewToDo/NewToDo";
import { Button } from "primereact/button";

export default function Header() {
  const [openAddToDo, setOpenAddToDo] = useState(false);

  return (
    <header className="header">
      <h1>Todo</h1>
      <Button className="pi pi-plus" onClick={() => setOpenAddToDo(true)} />
      <NewToDo visible={openAddToDo} onHide={() => setOpenAddToDo()} onEditToDo={{}}/>
    </header>
  )
};
