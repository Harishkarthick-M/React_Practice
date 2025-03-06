import React, { useState } from "react";
import Child from "./Child";
import SearchBar from "./SearchBar";

export function CardList() {
  const [cardList, setCardList] = useState([
    { id: 1, name: "harry" },
    { id: 2, name: "ron" },
    { id: 3, name: "flitwick" },
    { id: 4, name: "ron" },
    { id: 5, name: "ludo" },
  ]);
  const [search, setSearch] = useState("");

  // Remove duplicate names
  const uniqueCards = cardList.reduce((acc, card) => {
    if (!acc.some((item) => item.name === card.name)) {
      acc.push(card);
    }
    return acc;
  }, []);

  // Filter based on search
  const filteredCards = uniqueCards.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle delete
  const handleDelete = (id) => {
    setCardList(cardList.filter((card) => card.id !== id));
  };

  return (
    <div className="p-5">
      <SearchBar search={search} setSearch={setSearch} />

      <div className="flex flex-wrap gap-4 border border-red-400 p-4 w-fit">
        {filteredCards.map((card) => (
          <Child key={card.id} id={card.id} name={card.name} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
