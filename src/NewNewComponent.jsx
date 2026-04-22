import React, { useState } from "react";
function NewNewComponent() {
  // [] array destructuring
  // create JS obj in useState initial state {} with 3 properties
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  function handleYearChange(event) {
    //   spread operator to retain prev properties
    //   working w prev state of car, not curr
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    //   since we're creating JS obj within arrow f()
    // we need to surround it with parenthesis
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    // using setter(setCar), replacing initial obj with new obj{}
    // access model, access event, access its target, value
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div>
      <p>
        Your favorite car is
        {car.year}
        {car.make}
        {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}
export default NewNewComponent;
