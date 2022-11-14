import cls from "./todo-form.module.scss";
import addPhoto from "../../assets/images/add.svg";

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
    <form className={cls.form} onSubmit={handleSubmit}>
      <input
        autoFocus={true}
        className={cls.input}
        type="text"
        value={userInput}
        onKeyDown={handleKeyPress}
        placeholder="Write something !"
        onChange={handleChange}
      />
      <button className={cls.btn}>
        Add <img src={addPhoto} alt="" />
      </button>
    </form>
  );
}
export default TodoForm;
