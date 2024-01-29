import React, { useState } from "react";

const TaskItem = ({ task, onDelete, onUpdateState, onUpdateTitle }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdateTitle = () => {
    onUpdateTitle(task.id, newTitle);
    setEditing(false);
  };

  return (
    <li>
      <span>{task.title}</span>
      <div className="buttons-container"> {editing ? (
        <>
        <input type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}/>
        </>
      ):(
        <> </>
      )} </div>
    </li>
  );
};
