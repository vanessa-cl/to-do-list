import React from "react";
import { Checkbox } from "primereact/checkbox";

export default function ToDo({ id, title, date, priority, isCompleted }) {
  return (
    <div key={id} className="to-do">
      <Checkbox className="to-do-check"/>
      <h2 className="to-do-title">{title}</h2>
      <p className="to-do-info">{date}</p>
      <p className="to-do-info">{priority}</p>
      <i className="pi pi-pencil"/>
      <i className="pi pi-trash"/>
    </div>
  )
}