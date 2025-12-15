import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "Learn Redux", isCompleted: false },
    { id: 2, title: "Learn RTK", isCompleted: true },
    { id: 3, title: "Learn Javascript", isCompleted: true },
  ],
};

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: nextTodoId(state.todos),
        title: action.payload,
        isCompleted: false,
      });
    },
    editTodo(state, action) {
      const toEdit = state.todos.find((todo) => todo.id === action.payload.id);
      console.log("toEdit", toEdit, action.payload);
      if (toEdit) toEdit.title = action.payload.title;
    },
    markCompleted(state, action) {
      const toMark = state.todos.find((todo) => todo.id === action.payload);
      if (toMark) toMark.isCompleted = true;
    },
  },
});

export const { addTodo, editTodo, markCompleted } = todoSlice.actions;
export default todoSlice.reducer;
