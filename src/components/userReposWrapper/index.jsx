import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function UserReposWrapper({ userRepos }) {
  return (
    <div className="userRepos">
      <h2>Repositories</h2>
      <ul className="cardsWrapper">
        {userRepos.map((repo) => (
          <li key={repo.id} className="card">
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
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
