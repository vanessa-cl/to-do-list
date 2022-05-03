import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { createToDo, updateToDo } from "../../Services/api";

const INITIAL_FORM_STATE = {
  id: "",
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  isCompleted: false
}

export default function NewToDo({ visible, onHide, onEditToDo }) {
  const [toDoForm, setToDoForm] = useState(INITIAL_FORM_STATE);

  useEffect(() => {
    setToDoForm(() => ({
      id: onEditToDo.id,
      title: onEditToDo.title,
      description: onEditToDo.description,
      dueDate: onEditToDo.dueDate,
      priority: onEditToDo.priority,
      isCompleted: onEditToDo.isCompleted,
    }));
  }, [onEditToDo]);

  const handleChange = (e) => {
    return setToDoForm(() => {
      const auxValues = { ...toDoForm };
      auxValues[e.target.name] = e.target.value;
      return auxValues;
    });
  };

  const onSubmit = async () => {
    !onEditToDo.id ?
      createToDo(toDoForm.title, toDoForm.description, toDoForm.date, toDoForm.priority, toDoForm.isCompleted)
      : updateToDo(toDoForm.id, toDoForm.title, toDoForm.description, toDoForm.date, toDoForm.priority, toDoForm.isCompleted)
  }

  const priorityOptions = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" }
  ];

  return (
    <Dialog
      header="Edit ToDo"
      visible={visible}
      onHide={() => onHide()}
    >
      <span className="p-float-label">
        <InputText
          id="title"
          name="title"
          value={toDoForm.title}
          autoComplete="off"
          onChange={handleChange}
        />
        <label htmlFor="title">Title</label>
      </span>
      <span className="p-float-label">
        <InputTextarea
          id="description"
          name="description"
          value={toDoForm.description}
          autoComplete="off"
          onChange={handleChange}
        />
        <label htmlFor="title">Título</label>
      </span>
      <Dropdown
        id="priority"
        name="priority"
        value={toDoForm.priority}
        options={priorityOptions}
        onChange={handleChange}
      />
      <Calendar
        id="date"
        dateFormat="dd/mm/yy"
        name="date"
        value={toDoForm.dueDate}
        onChange={handleChange}
      />
      <Button
        label="Add"
        onClick={() => onSubmit()}
      ></Button>
    </Dialog>
  )
};
