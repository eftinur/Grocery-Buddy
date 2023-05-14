import React, { useEffect, useState } from "react";
import GroceryItem from "../GroceryItem/GroceryItem";
import toast from "react-hot-toast";

const getLocalStorage = () => {
  let list = localStorage.getItem("item");
  if(list) {
    return JSON.parse(localStorage.getItem("item"));
  } else {
    return []
  }
}
const GroceryBuddy = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // ALERT
      toast.error("Please enter a value");
    } else if (name && isEditing) {
      // ALERT
      setList(
        list.map((item) => {
          if (item.id === editingId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setIsEditing(false);
      setEditingId(null);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      toast.success("Item added to the list");
    }
  };

  const clearList = () => {
    toast.success("All items deleted");
    setList([]);
  };

  const removeItem = (id) => {
    toast.success("Item deleted");
    console.log(id);
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const editingItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditingId(id);
    setName(editingItem.title);
  };

  // storing data in Local Storage
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(list));
  }, [list]);

  return (
    <section className="max-w-[1240px] mx-auto min-h-screen py-12 px-4">
      <div className="w-full mx-auto border border-indigo-700 px-4 py-8 rounded-lg">
        <h1 className="text-2xl font-medium text-center uppercase">Grocery Buddy</h1>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center gap-4 my-4"
        >
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn btn-primary w-[100px]">
            {isEditing ? "EDIT" : "SUBMIT"}
          </button>
        </form>
        <div className="text-center">
          <GroceryItem
            list={list}
            removeItem={removeItem}
            editItem={editItem}
          />
          <button onClick={clearList}>Clear All</button>
        </div>
      </div>
    </section>
  );
};

export default GroceryBuddy;
