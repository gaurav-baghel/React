import { useState } from "react";
import ItemList from "./ItemsList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    // header

    <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 rounded-md cursor-default">
      <div className="flex justify-between font-bold cursor-pointer" onClick={handleClick}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
    //itemsList
  );
};

export default RestaurantCategory;
