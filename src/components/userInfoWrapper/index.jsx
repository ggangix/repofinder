import React from "react";
import PropTypes from "prop-types";

function UserInfoWrapper({ userData }) {
  return (
    <div className="userInfo">
      <img src={userData.avatar_url} alt="user avatar" width={"100px"} />
      <h2>{userData.name}</h2>
      <p>
        <strong>Username:</strong> {userData.login}
      </p>
      <p>
        <strong>Location:</strong> {userData.location}
      </p>
    </div>
  );
}

UserInfoWrapper.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInfoWrapper;
