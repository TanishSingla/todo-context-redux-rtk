import React, { useState, createContext } from "react";
import Todo from "./components/Todo";

const TodoContext = createContext();

const todoTask = [
  { id: 1, title: "Learn Redux", isCompleted: false },
  { id: 2, title: "Learn RTK", isCompleted: true },
  { id: 3, title: "Learn Javascript", isCompleted: true },
];

const initializeState = (state) => {
  return state;
};

const App = () => {
  const [todos, setTodos] = useState(() => initializeState(todoTask));
  const [inp, setInp] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrEditTodo = () => {
    if (!inp.trim()) return;
    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, title: inp } : todo
        )
      );
      setEditId(null);
      setInp("");
      return;
    }

    //Add
    const maxId = todos.reduce(
      (item, maxi) => (item.id > maxi ? item.id : maxi),
      -1
    );

    const newTodo = { id: maxId + 1, title: inp, isCompleted: false };
    setTodos([...todos, newTodo]);
    setInp("");
  };

  const handleEditClick = (id, title) => {
    setInp(title);
    setEditId(id);
  };

  const handleMarkCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };
  return (
    <TodoContext.Provider value={{ handleEditClick, handleMarkCompleted }}>
      <div>
        <div>
          <h3>Add Todo</h3>
          <input
            type="text"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
          <button onClick={handleAddOrEditTodo}>
            {editId ? "Edit" : "Add"}
          </button>
        </div>
        <div>
          <h2>Todo List - useContext hook</h2>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default App;
export { TodoContext };
