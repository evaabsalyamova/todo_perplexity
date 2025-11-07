import { useState } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = () => {
    if (inputValue === "") return;
    const newTodo: ITodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (id: ITodo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompletedTodo = (id: ITodo["id"]) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todoListContainer">
      <div className="todoListInputContainer">
        <input
          className="todoInput"
          type="text"
          value={inputValue}
          onKeyDown={handleKeyPress}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите текст"
        />
        <button className="addButton" onClick={handleAddTodo}>
          add
        </button>
      </div>
      <div className="todoListItemsContainer">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompletedTodo={handleCompletedTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
