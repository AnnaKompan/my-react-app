import Card from "./Card";
import Button from "./Button/Button";
import Students from "./Students";
import UserGreeting from "./UserGreeting";
import List from "./List";
function App() {
  const fruits = [
    { id: 1, name: "apple", caloris: 95 },
    { id: 2, name: "pinapple", caloris: 90 },
    { id: 3, name: "coconut", caloris: 120 },
  ];
  const vegetables = [
    { id: 6, name: "potato", caloris: 30 },
    { id: 7, name: "carrot", caloris: 25 },
    { id: 8, name: "celery", caloris: 15 },
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables"></List>
      ) : null}
    </>
  );
}

export default App;

// STYLING REACT COMPONENTS (W/O external frameworks)
// 1. External
// 2. Modules
// 3. Inline

// Props - readonly properies that are share between components.
// Parent component can send data to child component
// <Component key=value>

// Conditional Rendering = allows to control what gets rendered
// in APP based on certain condtions (show, hide, change)
