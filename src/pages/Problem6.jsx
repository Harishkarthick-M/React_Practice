import React, { useState } from "react";

const Problem6 = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const num = parseInt(inputValue);

    if (isNaN(num) || num < 0 || num > 50) {
      alert("Input needs to be between 0 and 50");
    } else {
      setNumbers([...numbers, num]); 
    }

    setInputValue(""); 
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter number between 0 and 50"
      />
      <button
        onClick={handleAdd}
      >
        Add
      </button>
      <p>You have just entered: {numbers.join(", ")}</p>
    </div>
  );
};

export default Problem6;
