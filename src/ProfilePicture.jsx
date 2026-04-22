function ProfilePicture() {
  const imgUrl = "../public/henning_w-nature-10130305_1280.jpg";
  const handleClick = (e) => (e.target.style.display = "none");
  return <img src={imgUrl} alt="profiel pic" onClick={(e) => handleClick(e)} />;
}
export default ProfilePicture;
