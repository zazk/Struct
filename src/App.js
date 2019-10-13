import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { getTree, getPeople } from "./utils/parsers";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople(setPeople);
  }, []);

  return (
    <div className="App">
      {getTree(people, 0).map(user => (
        <div key={`m-${user.id}`}>
          <Card user={user}></Card>
        </div>
      ))}
    </div>
  );
}

export default App;
