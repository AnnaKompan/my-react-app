import React, { useState } from "react";
function Component() {
  // use arr destructuring
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    //   reset input
    document.getElementById("foodInput").value = "";
    setFoods((food) => [...food, newFood]);
  }
  function handleRemoveFood(index) {
    //   _ param passed to f(x) is ignored (element)
    // filter method provided with element and idx of element
    //   filter leaves all that true
    // use arrow f(x) to filter els where curr i!=index we receive
    //   [1, 2, 3].filter(i => i != 2)
    setFoods(foods.filter((_, i) => i != index));
  }
  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          // add key to each list item to track them by idx
          // f(x) needs arg, so convert to arrow f(x)
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name..." />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
export default Component;
