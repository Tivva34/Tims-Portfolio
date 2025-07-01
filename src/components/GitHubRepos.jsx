import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./GitHubRepos.css";

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, [username]);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading GitHub repos...</p>;

  return (
    <div className="repo-list">
      <input
        type="text"
        placeholder="Search repositories..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <ul>
        {filteredRepos.map((repo) => (
          <li className="repo-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available."}</p>
            <p>⭐ {repo.stargazers_count}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
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