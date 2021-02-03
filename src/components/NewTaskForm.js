import React from "react";
import {useState} from "react";

function NewTaskForm({categories, onFormSubmit}) {

  const [details, setDetails] = useState("")
  const [cat, setCat] = useState("Code")

  function handleSubmit(e){
    e.preventDefault()
    const newObj = {cat, details}
    onFormSubmit(newObj)
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={details} 
          onChange={(e) => setDetails(e.target.value)}  
        />
      </label>
      <label> 
        Category
        <select 
          name="category"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
        >
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
