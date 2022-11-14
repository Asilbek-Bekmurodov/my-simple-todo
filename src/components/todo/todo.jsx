import cls from "./todo.module.scss";
import Trash from "../../assets/images/trash.svg";

function Todo({ todo, handleToggle, removeTask }) {
  return (
    <div key={todo.id} className={cls["item-todo"]}>
      <div className={todo.complete ? [cls.checked] : [cls.nochecked]}></div>
      <div className={cls.task} onClick={() => handleToggle(todo.id)}>
        {todo.task}
      </div>
      <div className={cls.deleteBtn} onClick={() => removeTask(todo.id)}>
        <img src={Trash} alt="" />
      </div>
    </div>
  );
}
export default Todo;
