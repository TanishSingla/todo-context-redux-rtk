import { useContext } from "react";
import { TodoContext } from "../App";

const Todo = ({ todo: { id, title, isCompleted } }) => {
  const { handleEditClick, handleMarkCompleted } = useContext(TodoContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px",
        border: "1px solid #ccc",
        marginBottom: "6px",
      }}
    >
      <span>{title}</span>
      <button
        style={{
          cursor: "pointer",
        }}
        onClick={() => handleEditClick(id, title)}
      >
        Edit
      </button>

      <button disabled={isCompleted} onClick={() => handleMarkCompleted(id)}>
        {isCompleted ? "Done✅" : "Not Done❌"}
      </button>
    </div>
  );
};

export default Todo;
