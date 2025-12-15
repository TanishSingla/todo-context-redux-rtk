import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "./store";

const App = () => {
  const [inp, setInp] = useState("");
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();

  const handleAddOrEditTodo = () => {
    if (!inp.trim()) return;

    if (editId === null) {
      dispatch(addTodo(inp));
      setInp("");
    } else {
      dispatch(editTodo(editId, inp));
      setInp("");
    }
  };

  const handleEditClick = (id, title) => {
    setInp(title);
    setEditId(id);
  };

  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <div>
        <h3>Add Todo</h3>
        <input
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button onClick={handleAddOrEditTodo}>{editId ? "Edit" : "Add"}</button>
      </div>
      <div>
        <h2>Todo List - Redux</h2>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleEditClick={handleEditClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
