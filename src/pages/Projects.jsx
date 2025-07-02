import React from "react";
import GitHubRepos from "../components/GitHubRepos";

export default function Projects() {
  return (
    <div className="page projects">
      <h1>Projects</h1>
      <p>Here are some of my GitHub projects:</p>
      <GitHubRepos username="Tivva34" />
    </div>
  );
}