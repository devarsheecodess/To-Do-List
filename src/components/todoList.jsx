import React, { useState } from 'react';
import "./todoList.css";

function ToDoList() {
  const [todoListItems, setTodoItems] = useState([]);

  const addItem = () => {
    let temp = prompt("Enter a task: ");
    if (temp !== null && temp !== "") {
      let totalItems = todoListItems.length + 1;
      setTodoItems([
        ...todoListItems,
        { id: totalItems, name: temp, done: false }
      ]);
    }
  };

  const handleChange = (id) => {
    setTodoItems(todoListItems.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
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
              <input
                type='checkbox'
                style={{ marginRight: "10px" }}
                checked={item.done}
                onChange={() => handleChange(item.id)}
                />
              {
                item.done ? (
                  <span style={{ color: "gray" }}>
                    <s>{item.name}</s>
                  </span>
                ) : (
                  <span>{item.name}</span>
                )
              }
            </p>
          </div>
        ))}
      </div>
      <div className="footer">
        <button id='addBtn' onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

export default ToDoList;
