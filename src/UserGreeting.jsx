import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn = false, userName = "Guest" }) {
  const welcomeMsg = <h2 className="welcome-msg">Welcome {userName}</h2>;
  const loginPrompt = <h2 className="login-prompt">Please log in</h2>;
  return isLoggedIn ? welcomeMsg : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};
// UserGreeting.defaultProps = {
//   isLoggeIn: false,
//   userName: "User",
// };

export default UserGreeting;
