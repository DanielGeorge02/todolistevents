import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete, setItems }) => {
  return (
    <main>
      {items.length ? (
        <div className="content">
          <ul>
            {items.map((item) => (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label
                  onDoubleClick={() => handleDelete(item.id)}
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                >
                  {item.item}
                </label>

                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(item.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is Empty</p>
      )}
    </main>
  );
};

export default Content;
