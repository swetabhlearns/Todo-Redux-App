import { useState } from "react";

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/TodoSlice";
import { logout } from "./features/UserSlice";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const user = useSelector((state) => state.auth.loggedInUser);

  const dispatch = useDispatch();
  const navigate = useNavigate("/");

  const handleAddTodo = (e) => {
    e.preventDefault();
    input.length > 0 && dispatch(addTodo(input));
    setInput(" ");
  };
  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="nav">
        <div className="navUser">
          <h2>Welcome {user && user.name}</h2>
        </div>
        <div className="navBtn">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="app">
        <form className="app-form" onSubmit={handleAddTodo}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="loginFormInput"
            required
          />
          <button type="submit">+</button>
        </form>
        <div className="todos">
          {count > 0 &&
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                id={todo.id}
                onCheck={handleTodoDone}
              />
            ))}
          {count === 0 && <p>No Todos</p>}
        </div>
      </div>
    </>
  );
}

export default App;
