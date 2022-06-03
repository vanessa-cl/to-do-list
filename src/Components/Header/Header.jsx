import React, { useState, useEffect } from "react";
import NewToDo from "../NewToDo/NewToDo";
import Button from "@mui/material/Button";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

export default function Header() {
  const [openAddToDo, setOpenAddToDo] = useState(false);
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    setDateString(new Date().toDateString());
  }, [])

  return (
    <header className="header">
      <h1 className="today-title">Today, {dateString}</h1>
      <Button
        onClick={() => setOpenAddToDo(true)}
      >
        <AddBoxRoundedIcon sx={{fontSize: "3.5rem"}} className="add-to-do-icon" />
      </Button>
      <NewToDo
        visible={openAddToDo}
        onHide={() => setOpenAddToDo()}
        onEditToDo={{}} />
    </header>
  )
};
