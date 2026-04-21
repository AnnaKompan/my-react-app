// import styles from "./Button.module.css";
function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "#fff",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "none",
  };
  // Module CSS styling
  // return <button className={styles.btn}>Click me!</button>;
  // INLINE CSS styling
  return <button style={styles}>Click me!</button>;
}
export default Button;
