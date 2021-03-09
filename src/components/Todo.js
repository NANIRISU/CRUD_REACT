


import React, { useState } from "react";
import EditTask from "./EditTask";



let idx = 1;
 function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: idx++,
      task: "something",
      isCompleted: false
    }
  ]);

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    

    if (!todo) {
      return;
    }

    const obj = {
      id: idx++,
      task: todo
    };
    console.log(todo);

    setTodos([...todos, obj]);
    setTodo("");
  }

  function deleteTask(id) {
    const newTodo = todos.filter((task) => task.id !== id);
    setTodos(newTodo);
    
  }

  return (
    <div className="App">
      <h1>TaskManager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="enter a task"
        />
        <button onClick={handleSubmit}>Add Task</button>
      </form>
      <div className='edit'>

          <ol>
        {todos.map((task) => (
            <li>
          <div>
            <div className="edit12">
               <EditTask todos={todos} setTodos={setTodos} taskId={task} />

              <button id="btn" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </div>
          </li>
        ))}
       </ol>
      </div>
      
    </div>
  );
}
export default Todo;