import React, { useState } from "react";
import { deleteToDo } from "../../Services/api";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddToDo from "../AddToDo/AddToDo";

export default function ToDoMenu({ openMenu, handleCloseMenu, handleOpenMenu, toDoData }) {
  const [openAddToDo, setOpenAddToDo] = useState(false);

  return (
    <>
      <Menu
        open={openMenu}
        onClose={() => handleCloseMenu()}
      >
        <MenuItem onClick={() => {
          setOpenAddToDo(true);
          handleCloseMenu();
        }}>
          <EditIcon sx={{ fontSize: "2rem" }} />
          Edit
        </MenuItem>
        <MenuItem onClick={() => {
          deleteToDo(toDoData.id);
          handleCloseMenu();
        }}>
          <DeleteIcon sx={{ fontSize: "2rem" }} />
          Delete
        </MenuItem>
      </Menu>
      <Button onClick={() => handleOpenMenu()}>
        <DehazeIcon className="to-do-icon" />
      </Button>
      {openAddToDo ?
        <AddToDo
          open={openAddToDo}
          onHide={() => setOpenAddToDo(false)}
          onEditToDo={toDoData}
        />
        : <></>
      }
    </>
  )
};
