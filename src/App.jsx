import React from "react";
import GitHubRepos from "./components/GitHubRepos.jsx"; 
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>Welcome to My Portfolio</h1>
      <GitHubRepos username="Tivva34" />
    </div>
  );
}

export default App;
