import React, { useState, useEffect } from "react";
import AddToDo from "../AddToDo/AddToDo";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    setDateString(new Date().toDateString());
  }, [])

  return (
    <header className="header">
      <h1 className="today-title">Today, {dateString}</h1>
      <Button
        onClick={() => setOpen(true)}
      >
        <AddIcon sx={{ fontSize: "3.5rem" }} className="add-to-do-icon" />
      </Button>
      <AddToDo
        open={open}
        onHide={() => setOpen(false)}
        onEditToDo={{}}
      />
    </header>
  )
};
