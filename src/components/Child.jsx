import React from "react";

const Child = ({ name, id }) => {
  return (
    <div style={{ 
      border: "2px solid black", 
      margin: "10px", 
      padding: "10px", 
      borderRadius: "8px", 
      width: "200px", 
      textAlign: "center",
    }}>
      <h2>{name}</h2>
      <p><strong>ID:</strong> {id}</p>
    </div>
  );
};

export default Child;
