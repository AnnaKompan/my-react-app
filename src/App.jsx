// import Card from "./Card";
// import Button from "./Button/Button";
// import ProfilePicture from "./ProfilePicture";
// import Students from "./Students";
// import UserGreeting from "./UserGreeting";
// import List from "./List";
// import Counter from "./Counter";
// import NewComponent from "./NewComponent";
// import MyComponent from "./myComponent";
// import ColorPicker from "./ColorPicker";
// import Component from "./Component";
import Comp from "./Comp";
// import NewNewComponent from "./NewNewComponent";
function App() {
  return <Comp></Comp>;
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

// onChange - event handler, used for forms mostly
// <input> <textarea> <select> elements
// onChange Triggers f(x) when value of input changes

// Updater Function - f(x) passed as argument in setState()
// allows safe update based on prev state
// used with multiple state updates async f(x)
