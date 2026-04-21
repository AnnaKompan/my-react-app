import PropTypes from "prop-types";
function List({ items, category }) {
  //   const fruits = [
  //     { id: 1, name: "apple", caloris: 95 },
  //     { id: 2, name: "pinapple", caloris: 90 },
  //     { id: 3, name: "coconut", caloris: 120 },
  //   ];
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));
  // fruits.sort((a, b) => a.caloris - b.caloris);
  const itemList = items;
  const lowCalFruits = itemList.filter((f) => f.caloris < 96);
  const listItems = lowCalFruits.map((f) => {
    return (
      <li key={f.id}>
        {f.name}: &nbsp; <b>{f.caloris}</b>{" "}
      </li>
    );
  });
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}
List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      caloris: PropTypes.number,
    }),
  ),
};

export default List;
