import cls from "./todo.module.scss";

function Todo({ todo, handleToggle, removeTask }) {
  return (
    <div key={todo.id} className={cls["item-todo"]}>
      <div
        className={todo.complate ? [cls.line] : [cls.noline]}
        onClick={() => handleToggle(todo.id)}
      >
        {todo.task}
      </div>
      <div onClick={() => removeTask(todo.id)}>X</div>
    </div>
  );
}
export default Todo;
