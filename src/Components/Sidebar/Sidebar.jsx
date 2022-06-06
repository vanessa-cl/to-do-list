import React from "react";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircleIcon from "@mui/icons-material/Circle";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Radio from "@mui/material/Radio";
import { FILTER_OPTIONS } from "../../Utils/utils";

export default function Sidebar({ toDoFilter, setToDoFilter, tagFilter, setTagFilter, cleanFilters }) {
  
  const handleToDoFilterChange = (event) => {
    setToDoFilter(event.target.value);
  }

  const handleTagFilterChange = (event) => {
    setTagFilter(event.target.value);
  }

  return (
    <nav className="sidebar">
      <Select
        className="to-do-filter"
        value={toDoFilter}
        onChange={(event) => handleToDoFilterChange(event)}
      >
        {FILTER_OPTIONS.map((filter, index) => {
          return (
            <MenuItem key={index} value={filter}>{filter}</MenuItem>
          )
        })}
      </Select>
      <nav className="tagbar">
        <div className="nav-link-wrapper">
          <label htmlFor="work-tag" className={`nav-link ${tagFilter === "work" ? "selected" : ""}`}>
            <CircleIcon sx={{ fontSize: "3rem" }} className="work-tag"></CircleIcon>
            <p>Work</p>
          </label>
          <Radio
            id="work-tag"
            style={{ display: "none" }}
            value={"work"}
            checked={tagFilter === "work"}
            onChange={(event) => handleTagFilterChange(event)}
          />
        </div>
        <div className="nav-link-wrapper">
          <label htmlFor="fun-tag" className={`nav-link ${tagFilter === "fun" ? "selected" : ""}`}>
            <CircleIcon sx={{ fontSize: "3rem" }} className="fun-tag"></CircleIcon>
            <p>Fun</p>
          </label>
          <Radio
            id="fun-tag"
            style={{ display: "none" }}
            value={"fun"}
            checked={tagFilter === "fun"}
            onChange={(event) => handleTagFilterChange(event)}
          />
        </div>
        <div className="nav-link-wrapper">
          <label htmlFor="house-tag" className={`nav-link ${tagFilter === "house" ? "selected" : ""}`}>
            <CircleIcon sx={{ fontSize: "3rem" }} className="house-tag"></CircleIcon>
            <p>House</p>
          </label>
          <Radio
            id="house-tag"
            style={{ display: "none" }}
            value={"house"}
            checked={tagFilter === "house"}
            onChange={(event) => handleTagFilterChange(event)}
          />
        </div>
        <div className="nav-link-wrapper">
          <label htmlFor="study-tag" className={`nav-link ${tagFilter === "study" ? "selected" : ""}`}>
            <CircleIcon sx={{ fontSize: "3rem" }} className="study-tag"></CircleIcon>
            <p>Study</p>
          </label>
          <Radio
            id="study-tag"
            style={{ display: "none" }}
            value={"study"}
            checked={tagFilter === "study"}
            onChange={(event) => handleTagFilterChange(event)}
          />
        </div>
        <div className="nav-link-wrapper">
          <label htmlFor="other-tag" className={`nav-link ${tagFilter === "other" ? "selected" : ""}`}>
            <CircleIcon sx={{ fontSize: "3rem" }} className="other-tag"></CircleIcon>
            <p>Other</p>
          </label>
          <Radio
            id="other-tag"
            style={{ display: "none" }}
            value={"other"}
            checked={tagFilter === "other"}
            onChange={(event) => handleTagFilterChange(event)}
          />
        </div>
        <Button
          className={`${!tagFilter ? "selected" : ""}`}
          startIcon={<FilterAltIcon />}
          onClick={() => cleanFilters()}>
          Clean Filters
        </Button>
      </nav>
    </nav>
  )
}
