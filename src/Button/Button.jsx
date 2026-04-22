import styles from "./Button.module.css";
function Button() {
  // const styles = {
  //   backgroundColor: "hsl(200, 100%, 50%)",
  //   color: "#fff",
  //   padding: "10px 20px",
  //   cursor: "pointer",
  //   borderRadius: "4px",
  //   border: "none",
  // };
  // event is an obj
  const handleClick = (event) => (event.target.textContent = "clicked");
  // let count = 0;
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   } else {
  //     console.log(`${name} stop clicking me`);
  //   }
  // };
  // const handleClick2 = (name) => console.log(`${name} stop clicking`);
  // Module CSS styling
  return (
    <button className={styles.btn} onDoubleClick={() => handleClick(event)}>
      Click me!
    </button>
    // <button className={styles.btn} onClick={() => handleClick("Anna")}>
    //   Click me!
    // </button>

    // if we have param then we wrap callback within f expression
    // or arrow f onClick={() => handleClick("Anna")}
    // onClick={handleClick2("Anna")} woudl execute right away
  );
  // INLINE CSS styling
  // return <button style={styles}>Click me!</button>;
}
export default Button;
