import React from "react";
import { FaPlus } from "react-icons/fa";

const AddEvent = ({ setNewItem, handleAdd, newItem }) => {
  return (
    <form className="addForm" onSubmit={handleAdd}>
      <input
        autoFocus
        id="addEvent"
        type="text"
        placeholder="Add Event"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddEvent;
