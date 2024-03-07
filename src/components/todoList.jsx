import React, { useState } from "react";
import "./todoList.css";

function ToDoList() {
  const [todoListItems, setTodoItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addItem = () => {
    let temp = prompt("Enter a task: ");
    if (temp !== null && temp !== "") {
      let totalItems = todoListItems.length + 1;
      setTodoItems([
        ...todoListItems,
        { id: totalItems, name: temp, done: false },
      ]);
    }
  };

  const handleChange = (id) => {
    setTodoItems(
      todoListItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const handleDelete = (id) => {
    setTodoItems(todoListItems.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setEditValue(item.name);
  };

  const handleSaveEdit = (id) => {
    setTodoItems(
      todoListItems.map((item) =>
        item.id === id ? { ...item, name: editValue } : item
      )
    );
    setEditingItem(null);
    setEditValue("");
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setEditValue("");
  };

  return (
    <div className="mainPage">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <div className="todoItems">
        {todoListItems.map((item) => (
          <div key={item.id}>
            <p className="items">
              {editingItem === item.id ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    className="edit-txt"
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <div className="btns">
                    <button
                      className="after-btns"
                      onClick={() => handleSaveEdit(item.id)}
                    >
                      <i class="fa-solid fa-floppy-disk"></i>
                    </button>
                    <button className="after-btns" onClick={handleCancelEdit}>
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    style={{ marginRight: "10px" }}
                    checked={item.done}
                    onChange={() => handleChange(item.id)}
                  />
                  {item.done ? (
                    <span style={{ color: "gray" }}>
                      <s>{item.name}</s>
                    </span>
                  ) : (
                    <span>{item.name}</span>
                  )}
                  <div className="edit">
                    <button id="editBtn" onClick={() => handleEdit(item)}>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      id="deleteBtn"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="footer">
        <button id="addBtn" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
