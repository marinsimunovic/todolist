// todo-item.tsx
import React, { useState } from "react";
import Button from "./button";
import Bin from "../assets/bin.svg";

type TodoItemProps = {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
};

const TodoItem = ({ task, deleteTask, toggleCompleted }: TodoItemProps) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [savedText, setSavedText] = useState(task.text); // Novo stanje za čuvanje teksta

  const handleChange = () => {
    toggleCompleted(task.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Ažuriranje stanja sačuvanog teksta
    setSavedText(editedText);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedText(savedText); // Vraćanje na prethodno sačuvani tekst
    setEditing(false);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  return (
    <div className={`todo__item ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      {editing ? (
        <input type="text" value={editedText} onChange={handleTextChange} />
      ) : (
        <p>{savedText}</p> // Prikaži ažurirani tekst
      )}
      <div>
        {editing ? (
          <>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={() => deleteTask(task.id)}>Delete</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
