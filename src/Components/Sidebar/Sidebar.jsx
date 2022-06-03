import Button from "@mui/material/Button";
import React from "react";

export default function Sidebar({ setFilter }) {
  return (
    <nav className="sidebar">
      <div className="nav-link-wrapper">
        <i className="pi pi-circle-fill" style={{color: "#92374D" }}></i>
        <Button className="nav-link" onClick={() => setFilter("today")}>Today</Button>
      </div>
      <div className="nav-link-wrapper">
        <i className="pi pi-circle-fill" style={{color: "#8C5383" }}></i>
        <Button className="nav-link" onClick={() => setFilter("all")}>All</Button>
      </div>
      <div className="nav-link-wrapper">
        <i className="pi pi-circle-fill" style={{color: "#4A5899" }}></i>
        <Button className="nav-link" onClick={() => setFilter("pending")}>Pending</Button>
      </div>
      <div className="nav-link-wrapper">
        <i className="pi pi-circle-fill" style={{color: "#559CAD" }}></i>
        <Button className="nav-link" onClick={() => setFilter("finished")}>Finished</Button>
      </div>
    </nav>
  )
}