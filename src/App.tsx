import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/TodoList/Header";

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
