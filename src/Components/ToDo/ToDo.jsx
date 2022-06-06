import React, { useState } from "react";
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import Checkbox from "@mui/material/Checkbox";
import CircleIcon from "@mui/icons-material/Circle";
import { updateToDo } from "../../Services/api";

export default function ToDo({ toDoData }) {
  const { id, title, description, dueDate, done, tags } = toDoData
  const [checked, setChecked] = useState(done);
  const [openMenu, setOpenMenu] = useState(false);
  
  const handleOpenMenu = () => {
    setOpenMenu(true);
  }

  const handleCloseMenu = () => {
    setOpenMenu(false);
  }

  const handleStatusChange = async (event) => {
    setChecked(event.target.checked);
    await updateToDo(id, title, description, dueDate, event.target.checked, tags);
  }

  return (
    <section className="to-do-wrapper" key={id}>
      <div className="to-do-header">
        <h2 className="to-do-title">{title}</h2>
        <div className="to-do-aside">
          <p className="to-do-date">{dueDate}</p>
          <ToDoMenu
            openMenu={openMenu}
            handleCloseMenu={() => handleCloseMenu()}
            handleOpenMenu={() => handleOpenMenu()}
            toDoData={toDoData}
          />
        </div>
      </div>
      <p className="to-do-text">{description}</p>
      <div className="to-do-footer">
        <div className="to-do-tags">
          {tags.map((tag) => {
            return (
              <CircleIcon sx={{ fontSize: "3rem" }} className={`${tag}-tag`}></CircleIcon>
            )
          })}
        </div>
        {console.log(checked)}
        <Checkbox
          checked={checked}
          onChange={(event) => handleStatusChange(event)}
        />
      </div>
    </section>
  )
}
