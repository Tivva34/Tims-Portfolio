import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./GitHubRepos.css";

import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript.svg";
import reactLogo from "../assets/react.svg";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css.svg";
import nodeLogo from "../assets/nodedotjs.svg";

const techIcons = {
  JavaScript: jsLogo,
  TypeScript: tsLogo,
  React: reactLogo,
  HTML: htmlLogo,
  CSS: cssLogo,
  Node: nodeLogo,
};

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
            {repo.language && techIcons[repo.language] && (
              <div className="tech-icons">
                <img
                  src={techIcons[repo.language]}
                  alt={repo.language}
                  className="tech-icon"
                />
              </div>
            )}
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
