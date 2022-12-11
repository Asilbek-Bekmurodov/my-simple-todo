import { useState } from "react";


function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Inter") {
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onKeyDown={handleKeyPress}
        placeholder="write something !"
        onChange={handleChange}
      />
      <button>add</button>
    </form>
  );
}
export default TodoForm;
