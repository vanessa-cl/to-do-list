import React, { useState } from "react";
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import { formatDate } from "../../Utils/utils";
import Checkbox from "@mui/material/Checkbox";
import CircleIcon from "@mui/icons-material/Circle";

export default function ToDo({ toDoData }) {
  const { id, title, description, createdAt, dueDate, tags, done } = toDoData
  const [isToDoCompleted, setIsToDoCompleted] = useState(done);
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(true);
  }

  const handleCloseMenu = () => {
    setOpenMenu(false);
  }

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
        <Checkbox
          checked={isToDoCompleted}
          onChange={(event) => teste(event)}
          label="Done"
        />
      </div>
    </section>
  )
}
