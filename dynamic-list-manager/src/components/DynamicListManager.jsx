import { useState } from 'react';

const DynamicListManager = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="list-manager">
      <h1>Dynamic List Manager</h1>
      
      <div className="input-section">
        <strong>Enter an item</strong>
        <div className="input-group">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
            placeholder="Type item here..."
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      </div>

      <div className="list-section">
        {items.length > 0 ? (
          <ul className="item-list">
            {items.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">No items in the list</p>
        )}
      </div>
    </div>
  );
};

export default DynamicListManager;