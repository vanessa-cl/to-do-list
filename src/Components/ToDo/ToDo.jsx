import React, { useState } from "react";
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import { formatDate } from "../../Utils/utils";
import Checkbox from "@mui/material/Checkbox";

export default function ToDo({ id, title, description, createdAt, dueDate, isCompleted, onEdit, onDelete }) {
  const [isToDoCompleted, setIsToDoCompleted] = useState(isCompleted);
  const teste = (e) => {
    console.log(e)
  }
  return (
    <section className="to-do-wrapper" key={id}>
      <div className="to-do-header">
        <h2 className="to-do-title">{title}</h2>
        <div className="to-do-aside">
          <p className="to-do-date">{formatDate(dueDate)}</p>
          <ToDoMenu
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
      <p className="to-do-text">{description}</p>
      <div className="to-do-footer">
        <div className="to-do-tags">

        </div>
        <Checkbox
          checked={isToDoCompleted}
          onChange={(event) => teste(event)}
          label="Done"
        />
      </div>
    </section>
  )
}
