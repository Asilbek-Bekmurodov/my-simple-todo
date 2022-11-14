import { useState } from "react";
import TodoForm from "./components/todo-form";
import Todo from "./components/todo";
import Logo from "./assets/images/Logo.svg";
import Area from "./assets/images/Clipboard.png";
import cls from "./assets/base.module.scss";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    const newTask = {
      id: Math.random(16).toString(36).substring(2, 9),
      task: userInput,
      complete: false,
      editMode: false,
    };
    setTodos([...todos, newTask]);
  };
  console.log(todos);

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className={cls.app}>
      <header>
        <div className={cls.logo}>
          <img src={Logo} alt="" />
        </div>
      </header>
      <TodoForm addTask={addTask} />

      <div className={cls["todo-wrapper"]}>
        <div className={cls["todo-counter"]}>
          <p className={cls.create}>
            Created tasks <span>{todos.length}</span>{" "}
          </p>
          <p className={cls.done}>
            Done <span>3</span>
          </p>
        </div>

        <div className={cls["todo-area"]}>
          <div className={cls.message}>
            <img src={Area} alt="" />
            <h3>You have no tasks registered yet</h3>
            <p>Create tasks and organize your tasks</p>
          </div>

          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              removeTask={removeTask}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
