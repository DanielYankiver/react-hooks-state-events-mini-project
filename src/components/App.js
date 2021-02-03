import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskArray, setTaskArray] = useState(TASKS)
  const [category, setCategory] = useState("All")


function formSubmit(newObj){
  const updatedTasksArray = [...taskArray, newObj]
  setTaskArray(updatedTasksArray)
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      category={category}
      setCategory={setCategory}
      />

      <NewTaskForm 
      categories={CATEGORIES.filter((meow) => meow !== "All")}
      onFormSubmit={formSubmit}
      />


      <TaskList tasks={TASKS} 
        taskArray={taskArray} 
        setTaskArray={setTaskArray}
      />
    </div>
  );
}

export default App;
