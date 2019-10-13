import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { getTree, getPeople } from "./utils/parsers";

function App() {
  const [people, setPeople] = useState([]);
  const [display, setDisplay] = useState("container");
  const getOppositeDisplay = () =>
    display === "container" ? "tree" : "container";
  const handleDisplay = () => setDisplay(getOppositeDisplay());

  useEffect(() => {
    getPeople(setPeople);
  }, []);
  return (
    <div className={`App ${display}`}>
      <h1>Organizational Chart</h1>
      <button onClick={handleDisplay}>Show: {getOppositeDisplay()}</button>
      <div className="Dashboard">
        {getTree(people, 0).map(user => (
          <div key={`m-${user.id}`}>
            <Card user={user}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
