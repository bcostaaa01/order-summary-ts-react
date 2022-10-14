import React from "react";

interface ListProps {
  itemName: String;
  price: Number;
  brand?: String;
}

const List = ({ ...ListProps }) => {
  return (
    <div id="order-summary">
      <ul>
        <li>
          {ListProps.brand} {ListProps.itemName}: {ListProps.price}
        </li>
      </ul>
    </div>
  );
};

export default List;
