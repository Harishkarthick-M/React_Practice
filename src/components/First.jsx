import { useState } from "react";

function First() {
  const [name, setName] = useState("Select city");
  const [showList, setShowList] = useState(false);

  

  let arr = ["Chennai", "Madurai", "Tiruvarur", "Trichy", "Coimbatore"];

  return (
    <div>
      <h1 style={{color:"royalblue"}}>{name}</h1>
      <button onClick={() => setShowList(!showList)}>Change</button>

      {showList && (
        <ul>
          {arr.map((city) => (
            <li 
              key={city}
              onClick={() => {
                setName(city);
                setShowList(false);
              }}
              style={{color:"rosybrown", cursor:"progress" }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default First;
