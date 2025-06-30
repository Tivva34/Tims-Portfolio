import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import React from "react";
import "./GitHubRepos.css"; 

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, [username]);

  return (
    <div className="repo-list">
      <h2>My GitHub Projects</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a> - ⭐ {repo.stargazers_count}
          </li>
        ))}
      </ul>
    </div>
  );
};

GitHubRepos.propTypes = {
  username: PropTypes.string.isRequired,
};
export default GitHubRepos;
