import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function UserInfoWrapper({ userData }) {
  return (
    <div className="userInfo">
      <img src={userData.avatar_url} alt="user avatar" />
      <h3>{userData.name}</h3>
      <p>
        <strong>Username:</strong> {userData.login}
      </p>
      <p>
        <strong>Location:</strong> {userData.location}
      </p>
      <p>
        <strong>Bio:</strong> {userData.bio}
      </p>
      <p>
        <strong>Public Repos:</strong> {userData.public_repos}
      </p>
      <p>
        <strong>Joined:</strong> {new Date(userData.created_at).toDateString()}
      </p>
    </div>
  );
}

UserInfoWrapper.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInfoWrapper;
