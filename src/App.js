import React from "react";
import users from "./data/user";
import Card from "./components/Card";
import { getTree } from "./utils/parsers";

function App() {
  return (
    <div className="App">
      {getTree(users, 0).map(user => (
        <div key={`m-${user.id}`}>
          <Card user={user}></Card>
        </div>
      ))}
    </div>
  );
}

export default App;
