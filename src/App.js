import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import users from "./data/user";

const getItems = (acc, obj, items, id) => {
  if (obj.manager === id) {
    obj.children = getTree(items, obj.id);
    acc.push(obj);
  }
  return acc;
};

const getTree = (items, manager) => {
  const mapper = [];
  for (let i = 0, t = items.length; i < t; i++) {
    const item = items[i];
    if (item.manager === manager) {
      item.children = items.reduce(
        (acc, obj) => getItems(acc, obj, items, item.id),
        []
      );
      mapper.push(item);
    }
  }
  return mapper;
};

const Card = ({ user }) => {
  return (
    <div>
      <div>
        Card Player: {user.first} {user.last}
      </div>
      <div>Manager: {user.manager}</div>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object.isRequired
};

function App() {
  console.log("TREES", getTree(users, 0));
  return (
    <div className="App">
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
}

export default App;
