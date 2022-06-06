import React, { useState, useEffect, useCallback } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { createToDo, updateToDo } from "../../Services/api";
import CircleIcon from "@mui/icons-material/Circle";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { TAGS_OPTIONS } from "../../Utils/utils";
import ptLocale from "date-fns/locale/pt-BR";

const INITIAL_FORM_STATE = {
  id: "",
  title: "",
  description: "",
  dueDate: new Date(),
  done: false,
  tags: [],
}

const ToDoInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: "#2F243A",
      borderWidth: "2px",
      borderRadius: "10px"
    }
  }
})

export default function AddToDo({ open, handleDialogClose, onEditToDo }) {
  const [toDoForm, setToDoForm] = useState(INITIAL_FORM_STATE);
  const [openSelect, setOpenSelect] = useState(false);
  const [letterCounter, setLetterCount] = useState(0);

  const isOnEditMode = useCallback(() => {
    return Object.keys(onEditToDo).length !== 0;
  }, [onEditToDo])

  useEffect(() => {
    setLetterCount(toDoForm.description.length)
  }, [toDoForm.description])

  useEffect(() => {
    if (isOnEditMode()) {
      setToDoForm(() => ({
        id: onEditToDo.id,
        title: onEditToDo.title,
        description: onEditToDo.description,
        dueDate: onEditToDo.dueDate,
        done: onEditToDo.done,
        tags: onEditToDo.tags,
      }))
    }
  }, [onEditToDo, isOnEditMode]);

  const handleFormChange = (event) => {
    return setToDoForm(() => {
      const auxValues = { ...toDoForm };
      auxValues[event.target.name] = event.target.value;
      return auxValues;
    });
  };

  const handleTagsChange = (event) => {
    setToDoForm({ ...toDoForm, tags: event.target.value });
  }

  const onSubmit = async () => {
    isOnEditMode() ?
      updateToDo(toDoForm.id, toDoForm.title, toDoForm.description, toDoForm.dueDate, toDoForm.done, toDoForm.tags)
      : createToDo(toDoForm);
  }

  return (
    <Dialog
      open={open}
      onClose={() => handleDialogClose()}
      maxWidth={"xs"}
      fullWidth={true}
    >
      <Box className="to-do-dialog-wrapper">
        <DialogTitle className="to-do-dialog-header">
          <p className="to-do-dialog-title">
            {isOnEditMode() ? "Edit To Do" : "Add To Do"}
          </p>
          <Button onClick={() => handleDialogClose()}>
            <CloseIcon sx={{ fontSize: "3rem" }} className="to-do-dialog-close" />
          </Button>
        </DialogTitle>
        <form className="to-do-form">
          <section className="to-do-form-row">
            <ToDoInput
              id="title"
              name="title"
              className="to-do-form-input"
              required
              value={toDoForm.title}
              autoComplete="off"
              onChange={(event) => handleFormChange(event)}
              label="Title"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptLocale}>
              <DatePicker
                id="dueDate"
                name="dueDate"
                className="to-do-form-input"
                mask="__/__/____"
                required
                value={toDoForm.dueDate}
                onChange={(value) => setToDoForm({ ...toDoForm, dueDate: value })}
                label="Done until"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </section>
          <ToDoInput
            id="description"
            name="description"
            className="to-do-form-input"
            required
            value={toDoForm.description}
            multiline
            rows={5}
            autoComplete="off"
            onChange={(event) => handleFormChange(event)}
            label="Description"
          />
          <section className="to-do-form-row">
            <Button onClick={() => setOpenSelect(true)}>
              <AddIcon sx={{ fontSize: "3rem" }} />
              Add tags
            </Button>
            <Select
              style={{ display: "none" }}
              id="tags-select"
              value={toDoForm.tags}
              onChange={(event) => handleTagsChange(event)}
              open={openSelect}
              onOpen={() => setOpenSelect(true)}
              onClose={() => setOpenSelect(false)}
              multiple
            >
              {TAGS_OPTIONS.map((tag) => {
                return (
                  <MenuItem value={tag}>
                    <CircleIcon sx={{ fontSize: "3rem" }} className={`${tag}-tag`}></CircleIcon>
                    <p>{tag}</p>
                  </MenuItem>
                )
              })}
            </Select>
            <p>{letterCounter}/200</p>
          </section>
          <section className="to-do-form-row">
            <div className="to-do-form-tags">
              {toDoForm.tags.map((tag, index) => {
                return (
                  <CircleIcon key={index} sx={{ fontSize: "3rem" }} className={`${tag}-tag`}></CircleIcon>
                )
              })}
            </div>
            <Button
              onClick={() => onSubmit()}
            >
              Add
            </Button>
          </section>
        </form>
      </Box>

    </Dialog>
  )
};
