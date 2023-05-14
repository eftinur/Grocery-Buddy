import React from "react";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const GroceryItem = ({ list, removeItem, editItem }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl uppercase">Grocery Items</h2>
      {list.map((item, index) => (
        <article key={index} className="flex justify-between items-center border-b py-3">
          <h3>{item.title}</h3>
          <div>
            <button
              onClick={() => editItem(item.id)}
              className="btn btn-sm btn-primary mx-4"
            >
              <FiEdit />
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="btn btn-sm btn-primary"
            >
              <AiFillDelete size={18} />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default GroceryItem;
