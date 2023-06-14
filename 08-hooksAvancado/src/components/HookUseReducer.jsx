import { useReducer } from "react";
import { useState } from "react";

const HookUseReducer = () => {
  // 1 - começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  //2 - avançando no useReducer
  const initialTasks = [
    { id: 1, text: "Fazer algo" },
    { id: 2, text: "Comer abacate" },
    { id: 3, text: "Ver TV" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD": {
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];
      }
      case "DELETE": {
        return state.filter((task) => task.id !== action.id);
      }
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [taskId, setTaskId] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Mudar número</button>
      <hr />
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskText"
          id=""
          onChange={(ev) => setTaskText(ev.target.value)}
          value={taskText}
          placeholder="Nova tarefa"
        />
        <input type="submit" value="Enviar" />
      </form>
      {/*       <form onSubmit={(ev) => removeTask(ev)}>
        <input
          type="text"
          name="taskId"
          value={taskId}
          onChange={(ev) => setTaskId(ev.target.value)}
          placeholder="Número de id"
        />
        <input type="submit" value="Apagar" />
      </form> */}
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
    </div>
  );
};

export default HookUseReducer;
