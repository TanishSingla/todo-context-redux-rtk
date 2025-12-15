import { useDispatch } from "react-redux";
import { markCompleted } from "./todoSlice";

const TodoItem = ({ todo: { title, id, isCompleted }, handleEditClick }) => {
  const dispatch = useDispatch();

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

      <button
        disabled={isCompleted}
        onClick={() => dispatch(markCompleted(id))}
      >
        {isCompleted ? "Done✅" : "Not Done❌"}
      </button>
    </div>
  );
};

export default TodoItem;
