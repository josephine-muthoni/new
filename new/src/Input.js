import React from 'react';

export default function Input({ type, placeholder, value, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}  // Pass the className for styling
    />
  );
}
