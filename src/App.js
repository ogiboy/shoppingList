import { useState } from "react";
import ListItem from "./components/ListItem";
import "./styles.css";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [userItems, setUserItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserItems([...userItems, { id: crypto.randomUUID(), item: userInput }]);
    setUserInput("");
  };

  const deleteItem = (id) => {
    const newItems = userItems.filter((item) => item.id !== id);
    setUserItems(newItems);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            min={3}
            value={userInput}
            placeholder="Enter items"
            autoFocus
            required
          />
          <button className="addBtn" type="submit">
            Add
          </button>
          <button
            className="clearBtn"
            type="button"
            onClick={() => setUserItems([])}
          >
            Clear
          </button>
        </form>
        <div className="userItems">
          {userItems.map((item, index) => (
            <ListItem
              key={item.id}
              id={item.id}
              userItem={item.item}
              deleteFunc={deleteItem}
              index={index}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
}
