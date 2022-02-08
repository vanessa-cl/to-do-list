import React from "react";
import { Checkbox } from "primereact/checkbox";

export default function ToDo({ id, title, date, priority, isCompleted, onDelete }) {
  return (
    <div key={id} className="to-do-wrapper">
      <Checkbox className="to-do-check"/>
      <h2 className="to-do-title">{title}</h2>
      <p className="to-do-info">{date}</p>
      <p className="to-do-info">{priority}</p>
      <button className="pi pi-pencil"/>
      <button className="pi pi-trash" onClick={onDelete}></button>
    </div>
  )
}