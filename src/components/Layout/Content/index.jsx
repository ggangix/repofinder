import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import UserContext from "../../../store/userContext";

function Content({ children }) {
  const [userData, setUserData] = useState({});
  const value = { userData, setUserData };

  return (
    <UserContext.Provider value={value}>
      <div className="content">{children}</div>
    </UserContext.Provider>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
