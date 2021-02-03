import React from "react";

function CategoryFilter({categories, category, setCategory}) {


  const categoryBtn = categories.map((category) => (
   
      <button 
        key={category}
        onClick={() => setCategory(category)}
      >
      {category}
      </button>

  )
)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtn}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
