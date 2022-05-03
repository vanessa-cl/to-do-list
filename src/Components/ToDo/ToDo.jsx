import React from "react";
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import { formatDate } from "../../Utils/utils";

export default function ToDo({ id, title, createdAt, dueDate, priority, isCompleted, onEdit, onDelete }) {

  return (
    <section className="to-do-wrapper" key={id}>
      <h2 className="to-do-title">{title.slice(0, 10)}</h2>
      <p className="to-do-info">{formatDate(createdAt)}</p>
      <p className="to-do-info">{formatDate(dueDate)}</p>
      <p className="to-do-info">{priority}</p>
      <ToDoMenu onEdit={onEdit} onDelete={onDelete}/>
    </section>
  )
}
