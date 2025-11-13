import { useEffect, useRef, useState } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import TodoListInfo from "./TodoListInfo";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState("all");

  const getFilteredTodo = (): ITodo[] => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "all":
      default:
        return todos;
    }
  };

  const handleFilterChange = (filterType: "all" | "active" | "completed") => {
    setFilter(filterType);
  };

  const handleAddTodo = () => {
    inputRef.current?.focus();

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

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="todoListContainer">
      <div>
        <TodoListInfo
          handleFilterChange={handleFilterChange}
          todosCount={getFilteredTodo().length}
        />
      </div>
      <div className="todoListInputContainer">
        <input
          className="todoInput"
          ref={inputRef}
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
        {getFilteredTodo().map((todo) => (
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
