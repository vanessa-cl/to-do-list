import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NewToDo from "../NewToDo/NewToDo";
import DehazeIcon from "@mui/icons-material/Dehaze";

export default function ToDoMenu({ onEdit, onDelete }) {
  const [openMenu, setOpenMenu] = useState(true);
  const [openAddToDo, setOpenAddToDo] = useState(false);
  const [isOnEditMode, setIsOnEditMode] = useState({});

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        open={open}
        onClose={() => handleClose()}
      >
        <MenuItem onClick={() => {
          setOpenAddToDo(true);
          setIsOnEditMode(onEdit);
          handleClose();
        }}>Edit</MenuItem>
        <MenuItem onClick={() => {
          onDelete();
          handleClose();
        }}>Delete</MenuItem>
        <MenuItem onClick={() => {
          setOpenAddToDo(true);
          handleClose();
        }}>New To Do</MenuItem>
      </Menu>
      <Button
        onClick={() => handleClick()}
      ><DehazeIcon className="to-do-icon" /></Button>
      <NewToDo
        visible={openAddToDo}
        onHide={() => setOpenAddToDo()}
        onEditToDo={isOnEditMode}
      />
    </>
  )
};
