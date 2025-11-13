import "./styles.css";

interface IProps {
  handleFilterChange: (filterType: "all" | "active" | "completed") => void;
  todosCount: number;
}

const TodoListInfo: React.FunctionComponent<IProps> = ({
  handleFilterChange,
  todosCount,
}) => {
  return (
    <div className="infoBlock">
      <button className="infoButton" onClick={() => handleFilterChange("all")}>
        Все
      </button>
      <button
        className="infoButton"
        onClick={() => handleFilterChange("active")}
      >
        Активные
      </button>
      <button
        className="infoButton"
        onClick={() => handleFilterChange("completed")}
      >
        Выполненные
      </button>
      <div>Всего задач:{todosCount}</div>
    </div>
  );
};

export default TodoListInfo;
