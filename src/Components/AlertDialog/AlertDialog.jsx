import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

export const AlertDialog = ({ open, handleAlertClose, confirmDelete }) => {

  return (
    <Dialog
      open={open}
      onClose={() => handleAlertClose()}
      maxWidth={"xs"}
      fullWidth={true}
    >
      <Box className="to-do-dialog-wrapper">
        <DialogTitle className="to-do-dialog-header">
          <p className="to-do-dialog-title">Delete To-Do</p>
          <Button onClick={() => handleAlertClose()}>
            <CloseIcon sx={{ fontSize: "3rem" }} className="to-do-dialog-close" />
          </Button>
        </DialogTitle>
        <DialogContentText>Are you sure you want to delete this to-do?</DialogContentText>
        <DialogActions>
          <Button onClick={() => handleAlertClose()}>
            No
          </Button>
          <Button onClick={() => {
            confirmDelete();
            handleAlertClose();
          }}>
            Yes
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}
