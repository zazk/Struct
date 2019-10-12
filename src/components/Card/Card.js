import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../App.css";
const Card = ({ user }) => {
  const [show, setShow] = useState(false);
  const getText = show => (show ? "Hide" : "Show");
  const hasChildren = user.children.length > 0;

  return (
    <div className="Card">
      <div>
        Card Player: {user.first} {user.last}
      </div>
      <div>Manager: {user.manager}</div>
      <div className="children">
        {hasChildren && (
          <div>
            <button onClick={() => setShow(!show)}>
              {getText(show)} Employees
            </button>
            {show &&
              user.children.map(u => <Card key={`c-${u.id}`} user={u} />)}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object.isRequired
};

export default Card;
