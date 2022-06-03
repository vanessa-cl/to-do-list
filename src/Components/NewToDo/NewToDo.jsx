import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { createToDo, updateToDo } from "../../Services/api";
import Checkbox from "@mui/material/Checkbox";

const INITIAL_FORM_STATE = {
  id: "",
  title: "",
  description: "",
  dueDate: "",
  highPriority: false,
  done: false
}

export default function NewToDo({ visible, onHide, onEditToDo }) {
  const [toDoForm, setToDoForm] = useState(INITIAL_FORM_STATE);

  useEffect(() => {
    setToDoForm(() => ({
      id: onEditToDo.id,
      title: onEditToDo.title,
      description: onEditToDo.description,
      dueDate: onEditToDo.dueDate,
      highPriority: onEditToDo.priority,
      done: onEditToDo.done,
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
      createToDo(toDoForm.title, toDoForm.description, toDoForm.dueDate, toDoForm.highPriority, toDoForm.done)
      : updateToDo(toDoForm.id, toDoForm.title, toDoForm.description, toDoForm.dueDate, toDoForm.highPriority, toDoForm.done)
  }

  return (
    <Dialog
      className="edit-modal-wrapper"
      open={visible}
      onClose={() => onHide()}
    >
      <TextField
        id="title"
        name="title"
        value={toDoForm.title}
        autoComplete="off"
        onChange={handleChange}
        label="Title"
      />
      <TextField
        id="description"
        name="description"
        value={toDoForm.description}
        autoComplete="off"
        onChange={handleChange}
        label="Description"
      />
      <Checkbox
        checked={toDoForm.highPriority}
        onChange={() => handleChange}
        label="High Priority"
      />
      <DesktopDatePicker
        id="date"
        inputFormat="dd/mm/yy"
        name="date"
        value={toDoForm.dueDate}
        onChange={handleChange}
        label="Done until:"
        renderInput={(params) => <TextField {...params} />}
      />
      <Button
        onClick={() => onSubmit()}
      >Add</Button>
    </Dialog>
  )
};
