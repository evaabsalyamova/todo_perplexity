import { ITodo } from "..";
import "./styles.css";

interface IProps {
  todo: ITodo;
  handleDeleteTodo(id: number): void;
  handleCompletedTodo(id: number): void;
}

const TodoItem: React.FunctionComponent<IProps> = ({
  todo,
  handleDeleteTodo,
  handleCompletedTodo,
}) => {
  return (
    <div className="todoItemBlock">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCompletedTodo(todo.id)}
      />
      <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </div>
      <button
        className="deleteButton"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        х
      </button>
    </div>
  );
};

export default TodoItem;
