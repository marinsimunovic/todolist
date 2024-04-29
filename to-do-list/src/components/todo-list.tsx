import { useState } from "react";
import TodoItem from "./todo-item";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      text: "ucit",
      completed: true,
    },
    {
      id: 2,
      text: "oprat sude",
      completed: false,
    },
    {
      id: 3,
      text: "usisat",
      completed: false,
    },
    {
      id: 4,
      text: "vjezbat",
      completed: false,
    },
  ]);

  const [text, setText] = useState<string>("");

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]); // Dodajemo novi task na početak polja tasks
    setText("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="todo__list">
      <input
        className="todo__input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTask(text)}>Add</button>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
