import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../App.css";
const Card = ({ user }) => {
  const [show, setShow] = useState(false);
  const getText = show => (show ? "Hide" : "Show");
  const hasChildren = user.children.length > 0;
  const position = hasChildren ? "Manager" : "Employee";

  return (
    <div className="Card">
      <h3>
        {position}: {user.first} {user.last}
      </h3>
      {user.department && <div>Department: {user.department}</div>}
      {hasChildren && (
        <div>
          <button onClick={() => setShow(!show)}>
            {getText(show)} Employees
          </button>
          <div className="children">
            {show &&
              user.children.map(u => <Card key={`c-${u.id}`} user={u} />)}
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object.isRequired
};

export default Card;
