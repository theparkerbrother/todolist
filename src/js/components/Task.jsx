import React,  { useState } from "react";
import trashCan from "../../../trashcanicon.svg"

const Task = ({ id, description, onDelete}) => {

    return (
        <li className="list-group-item d-flex">
            <input className="form-check-input me-3" type="checkbox" />
            <span className="me-auto">{description}</span>         
            <img 
                src={trashCan}
                alt="Trash"
                className="ms-3 cursor-pointer trashCan"
                onClick={() => onDelete(id)}
            />
        </li>
    )
}

export default Task;