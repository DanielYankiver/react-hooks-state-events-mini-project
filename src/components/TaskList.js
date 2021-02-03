import React from "react";
import Task from "./Task"

function TaskList({taskArray, setTaskArray}) {
  const taskList = taskArray.map((task) => (
    <Task 
    key={task.text}
    text={task.text}
    category={task.category}
    handleDelete={handleDelete}
    />
  ))
  
  function handleDelete(key){
    const updatedTasks = taskArray.filter(task => task.key !== key)
    setTaskArray(updatedTasks)
  }

  return (
    <div className="tasks">
      {taskList}

      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;

// function deleteTodo(id) {
//   const updatedTodos = todos.filter(todo => todo.id !== id)
//   setTodos(updatedTodos)
// }
