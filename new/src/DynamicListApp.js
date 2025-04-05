import React, { useState } from 'react';
import Input from './Input';  // Import Input component
import Button from './Button';  // Import Button component
import Card from './Card';  // Import Card component
import './App.css';  // Import the CSS file for styling

export default function DynamicListApp() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") return;  // Don't add empty items
    setItems([...items, inputValue.trim()]);
    setInputValue("");  // Clear input field after adding item
  };

  return (
    <div className="app-container">
      <div className="card-container">
        <h1 className="title">Dynamic List Manager</h1>

        <div className="input-button-container">
          <Input
            type="text"
            placeholder="Enter an item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input-field"
          />
          <Button
            className="add-button"
            onClick={handleAddItem}
          >
            Add Item
          </Button>
        </div>

        <Card className="list-container">
          {items.length === 0 ? (
            <p className="empty-message">No items added yet.</p>
          ) : (
            <ul className="item-list">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
