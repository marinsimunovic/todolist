type TodoItemProps = {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
};

const TodoItem = ({ task, deleteTask, toggleCompleted }: TodoItemProps) => {
  const handleChange = () => {
    toggleCompleted(task.id);
  };

  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
};

export default TodoItem;
