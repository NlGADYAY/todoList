import { useState, useCallback } from "react";
import { Button } from "../../components/Button/";
import { ItemsTodoList } from "../../components/Item/Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, editTask } from "../../redux/todoSlice";
import "./home.css";

interface TodoState {
  todo: {
    tasks: string[];
  };
}

export const Home = () => {
  const [task, setTask] = useState<string>("");
  const [editTaskIndex, setEditTaskIndex] = useState<number | null>(null);

  const tasks = useSelector((state: TodoState) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleClickAddTask = useCallback(() => {
    if (task) {
      if (editTaskIndex !== null) {
        dispatch(editTask({ index: editTaskIndex, task }));
        setEditTaskIndex(null);
      } else {
        dispatch(addTask(task));
      }
      setTask("");
    }
  }, [task, editTask, dispatch]);

  const handleClickRemoveTask = useCallback(
    (index: number) => {
      dispatch(removeTask(index));
    },
    [dispatch]
  );

  const handleEditTask = useCallback(
    (index: number) => {
      setTask(tasks[index]);
      setEditTaskIndex(index);
    },
    [tasks]
  );

  return (
    <div className="home">
      <h1 className="todo">To-Do List</h1>
      <input
        className="addTodo"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Todo"
      />
      <Button onClick={handleClickAddTask} type="buttonAdd">
        {editTaskIndex !== null ? "Save" : "Add"}
      </Button>
      <ItemsTodoList
        tasks={tasks}
        onRemove={handleClickRemoveTask}
        onEdit={handleEditTask}
      />
    </div>
  );
};
