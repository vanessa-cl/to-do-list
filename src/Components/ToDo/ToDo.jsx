import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import NewToDo from "../NewToDo/NewToDo"
import formatDate from "../../Utils/utils"

export default function ToDo({ id, title, date, priority, isCompleted, onDelete }) {
  const [displayEdit, setDisplayEdit] = useState(false);
  
  return (
    <>
      <div key={id} className="to-do-wrapper">
        <Checkbox className="to-do-check" />
        <h2 className="to-do-title">{title}</h2>
        <p className="to-do-info">{formatDate(date)}</p>
        <p className="to-do-info">{priority}</p>
        <Button className="to-do-button pi pi-pencil" onClick={() => setDisplayEdit(true)}/>
        <Button className="to-do-button pi pi-trash" onClick={onDelete}/>
      </div>
      <Dialog header="Editar tarefa" visible={displayEdit} onHide={() => setDisplayEdit(false)}>
        <NewToDo toDoId={id}/>
      </Dialog>
    </>
  )
}