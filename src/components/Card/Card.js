import React from "react";
import PropTypes from "prop-types";
import "../../App.css";
const Card = ({ user }) => {
  return (
    <div className="Card">
      <div>
        Card Player: {user.first} {user.last}
      </div>
      <div>Manager: {user.manager}</div>
      <div className="children">
        {user.children.map(u => (
          <div key={`c-${u.id}`}>
            <Card user={u} />
          </div>
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object.isRequired
};

export default Card;
