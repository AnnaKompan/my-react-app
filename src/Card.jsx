import randomPic from "./assets/henning_w-nature-10130305_1280.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card__img" src={randomPic} alt="random picture" />
      <h2 className="card__title">Test</h2>
      <p className="card__txt">random text</p>
    </div>
  );
}

export default Card;
