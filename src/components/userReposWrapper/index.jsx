import React from "react";
import PropTypes from "prop-types";

function UserReposWrapper({ userRepos }) {
  return (
    <div className="userRepos">
      <h2>Repositories</h2>
      <ul>
        {userRepos.map((repo) => (
          <li key={repo.id} className="card">
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

UserReposWrapper.propTypes = {
  userRepos: PropTypes.array.isRequired,
};

export default UserReposWrapper;
