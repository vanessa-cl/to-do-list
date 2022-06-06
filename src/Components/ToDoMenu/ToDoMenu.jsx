import React, { useState } from "react";
import { deleteToDo } from "../../Services/api";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddToDo from "../AddToDo/AddToDo";
import { AlertDialog } from "../AlertDialog/AlertDialog";

export default function ToDoMenu({ openMenu, handleCloseMenu, handleOpenMenu, toDoData }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      <Menu
        open={openMenu}
        onClose={() => handleCloseMenu()}
      >
        <MenuItem onClick={() => {
          setOpenDialog(true);
          handleCloseMenu();
        }}>
          <EditIcon sx={{ fontSize: "2rem" }} />
          Edit
        </MenuItem>
        <MenuItem onClick={() => {
          setOpenAlert(true);
          handleCloseMenu();
        }}>
          <DeleteIcon sx={{ fontSize: "2rem" }} />
          Delete
        </MenuItem>
      </Menu>
      <Button onClick={() => handleOpenMenu()}>
        <DehazeIcon className="to-do-icon" />
      </Button>
      <AddToDo
        open={openDialog}
        handleDialogClose={() => setOpenDialog(false)}
        onEditToDo={toDoData}
      />
      <AlertDialog
        open={openAlert}
        handleAlertClose={() => setOpenAlert(false)}
        confirmDelete={() => deleteToDo(toDoData.id)}
      />
    </>
  )
};
