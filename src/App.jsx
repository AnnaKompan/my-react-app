// import Card from "./Card";
// import Button from "./Button/Button";
// import ProfilePicture from "./ProfilePicture";
// import Students from "./Students";
// import UserGreeting from "./UserGreeting";
// import List from "./List";
import Counter from "./Counter";
// import MyComponent from "./myComponent";
function App() {
  return <Counter></Counter>;
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

// click events, we can respond to them by passing a callback to the onClick handler

// React hooks - function that allows functional components to use React features
// w/0 writing class components(useState, useEffect, useReducer, useCallback)
// if starts with {use...} its most likely hook
// useState() = react hook that allows creation of stateful var
// & setter f(x) to update its value in virtual DOM [name, setName]
