// props is JS obj
// propTypes = mechanism, ensures that passed val is correct type
// age: propTypes.number

// DefaultProps = def values for props if dont passed from parent
// name: "Guest"

import PropTypes from "prop-types";
// instead of default props
function Students({ name = "Guest", age = 0, isStudent = "No" }) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
// Students.defaultProps = {
//   name: "Guest",
//   age: 0,
//   isStudent: false,
// };
export default Students;
