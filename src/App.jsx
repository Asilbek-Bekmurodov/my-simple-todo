import { useState } from "react";
import TodoForm from "./components/todo-form";
import Todo from "./components/todo";
import todo from "./components/todo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    const newTask = {
      id: Math.random(16).toString(36).substring(2, 9),
      task: userInput,
      complate: false,
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
        todo.id === id ? { ...todo, complate: !todo.complate } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>Count todos : {todos.length}</h1>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          removeTask={removeTask}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default App;
