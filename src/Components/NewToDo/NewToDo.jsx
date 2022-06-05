import React, { useState, useEffect } from "react";
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

const INITIAL_FORM_STATE = {
  id: "",
  title: "",
  description: "",
  dueDate: new Date().toLocaleDateString(),
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

export default function NewToDo({ open, onHide, onEditToDo }) {
  const [toDoForm, setToDoForm] = useState(INITIAL_FORM_STATE);
  const [openSelect, setOpenSelect] = useState(false);
  const [letterCounter, setLetterCount] = useState(0);

  useEffect(() => {
    setLetterCount(toDoForm.description.length)
  }, [toDoForm.description])

  const handleOpenSelect = () => {
    setOpenSelect(true);
  }

  const handleCloseSelect = () => {
    setOpenSelect(false);
  }

  // useEffect(() => {
  // setToDoForm(() => ({
  // id: onEditToDo.id,
  // title: onEditToDo.title,
  // description: onEditToDo.description,
  // dueDate: onEditToDo.dueDate,
  // done: onEditToDo.done,
  // tags: onEditToDo.tags,
  // }));
  // }, [onEditToDo]);

  const handleFormChange = (event) => {
    return setToDoForm(() => {
      const auxValues = { ...toDoForm };
      auxValues[event.target.name] = event.target.value;
      return auxValues;
    });
  };

  const handleTagsChange = (event) => {
    setToDoForm({ ...toDoForm, tags: event.target.value })
  }

  const onSubmit = async () => {
    !onEditToDo.id ?
      createToDo(toDoForm)
      : updateToDo(toDoForm)
  }

  return (
    <Dialog
      open={open}
      onClose={() => onHide()}
      maxWidth={"xs"}
      fullWidth={true}
    >
      <Box className="to-do-dialog-wrapper">
        <DialogTitle className="to-do-dialog-header">
          <p className="to-do-dialog-title">New To Do</p>
          <Button onClick={() => onHide()}>
            <CloseIcon sx={{ fontSize: "3rem" }} className="to-do-dialog-close" />
          </Button>
        </DialogTitle>
        <form className="to-do-form">
          <section className="to-do-form-row">
            <ToDoInput
              id="title"
              name="title"
              className="to-do-form-input"
              value={toDoForm.title}
              autoComplete="off"
              onChange={(event) => handleFormChange(event)}
              label="Title"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <ToDoInput
                id="dueDate"
                name="dueDate"
                className="to-do-form-input"
                value={toDoForm.dueDate}
                onChange={(event) => setToDoForm({ ...toDoForm, dueDate: new Date(event).toLocaleDateString() })}
                label="Done until"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </section>
          <ToDoInput
            id="description"
            name="description"
            className="to-do-form-input"
            value={toDoForm.description}
            autoComplete="off"
            onChange={(event) => handleFormChange(event)}
            label="Description"
          />
          <section className="to-do-form-row">
            <Button onClick={() => handleOpenSelect()}>
              <AddIcon sx={{ fontSize: "3rem" }} />
              Add tags
            </Button>
            <Select
              style={{ display: "none" }}
              id="tags-select"
              value={toDoForm.tags}
              onChange={(event) => handleTagsChange(event)}
              open={openSelect}
              onOpen={() => handleOpenSelect()}
              onClose={() => handleCloseSelect()}
              multiple
            >
              <MenuItem value={"work"}>
                <CircleIcon sx={{ fontSize: "3rem" }} className="work-tag"></CircleIcon>
                <p>Work</p>
              </MenuItem>
              <MenuItem value={"fun"}>
                <CircleIcon sx={{ fontSize: "3rem" }} className="fun-tag"></CircleIcon>
                <p>Fun</p>
              </MenuItem>
              <MenuItem value={"house"}>
                <CircleIcon sx={{ fontSize: "3rem" }} className="house-tag"></CircleIcon>
                <p>House</p>
              </MenuItem>
              <MenuItem value={"study"}>
                <CircleIcon sx={{ fontSize: "3rem" }} className="study-tag"></CircleIcon>
                <p>Study</p>
              </MenuItem>
              <MenuItem value={"other"}>
                <CircleIcon sx={{ fontSize: "3rem" }} className="other-tag"></CircleIcon>
                <p>Other</p>
              </MenuItem>
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
