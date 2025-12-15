import { createStore } from "redux";

//
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

//
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            title: action.payload,
            isCompleted: false,
          },
        ],
      };
    case "todos/editTodo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
              }
            : todo
        ),
      };

    case "todos/markCompleted":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isCompleted: true } : todo
        ),
      };
    default:
      return state;
  }
};

//action creators :

export const addTodo = (title) => {
  return {
    type: "todos/addTodo",
    payload: title,
  };
};
export const editTodo = (id, title) => {
  return {
    type: "todos/editTodo",
    payload: {
      id,
      title,
    },
  };
};

export const markCompleted = (id) => {
  return {
    type: "todos/markCompleted",
    payload: id,
  };
};

export const store = createStore(rootReducer);
