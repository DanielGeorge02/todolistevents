import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import AddEvent from "./AddEvent";
import Header from "./Header";
import React, { useState } from "react";
import Search from "./Search";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Practice coding",
    },
    {
      id: 2,
      checked: false,
      item: "Read books",
    },
    {
      id: 3,
      checked: false,
      item: "Gym",
    },
  ]);
  const [newItem, setNewItem] = useState("");
  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
    localStorage.setItem("todo_list", JSON.stringify(listitems));
  };
  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id != id);
    setItems(listitems);
    localStorage.setItem("todo_list", JSON.stringify(listitems));
  };
  const addEvent = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewEvent = { id, checked: false, item };
    const listItems = [...items, addNewEvent];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addEvent(newItem);
    setNewItem("");
  };
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header />
      <AddEvent
        newItem={newItem}
        setNewItem={setNewItem}
        handleAdd={handleAdd}
      />
      <Search search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        setItem={setItems}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
