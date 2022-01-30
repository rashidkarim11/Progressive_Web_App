import React, { useState } from "react";
import { getWeather } from "./API/GetWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  console.log(query, "query");
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await getWeather(query);
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Serach..."
        onKeyPress={search}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      ></input>
    </div>
  );
};
export default App;
