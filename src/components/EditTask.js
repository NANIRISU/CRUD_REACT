import React, { useState } from "react";

function EditTask({ taskId, todos, setTodos }) {
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState(taskId.task);

  function handleEdit() {
    setEdit(!edit);
  }

  function handleEditChange(e) {
    setTodo(e.target.value);
  }

  function handleEditSubmit(id) {
    const editList = todos.map((oneTask) => {
      if (oneTask.id === id) {
        console.log(id);
        oneTask.task = todo;
      }
      return oneTask;
    });
    setTodos(editList);
    handleEdit();
  }

  return (
    <div key={taskId.id}>
      {!edit ? (
        <>
          <span>{taskId.task}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      ) : (
        <>
          <input type="text" value={todo} onChange={handleEditChange} />
          <button onClick={handleEdit}>Cancel</button>
          <button type="submit" onClick={() => handleEditSubmit(taskId.id)}>
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default EditTask;
