import React from "react";

const CV = () => {
  return (
    <div className="cv-container" style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", maxWidth: "800px", margin: "20px auto" }}>
      <h1>Tim Verlage</h1>
      <p><strong>Email:</strong> Tivva91@gmail.com</p>
      <p><strong>Location:</strong> Skoghall, Sweden</p>
      <h2>Profile</h2>
      <p>
        Enthusiastic and creative frontend developer in training with a strong passion for coding, clean design, and problem-solving.
        Originally began programming in 2020 while studying game development, but soon transitioned into web development with a focus
        on React and modern frontend technologies. Eager to continue learning and bringing ideas to life through interactive,
        user-friendly experiences.
      </p>

      <h2>Skills</h2>
      <ul>
        <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js</li>
        <li><strong>Version Control:</strong> Git, GitHub</li>
        <li><strong>Development Practices:</strong> Responsive Design, Clean Code, Creativity in UI/UX</li>
        <li><strong>Soft Skills:</strong> Problem-Solving, Self-Motivation, Creativity, Fast Learning</li>
      </ul>

      <h2>Education</h2>
      <h3><strong>Game Development Studies - 2020</strong></h3>
        <p><strong>Kristinehamns Folkhögskola, Karlstad/Kristinehamn
      </strong></p>
      <ul>
        <li>Gained a solid foundation in programming, and developed skills in Unity game engine and game design concepts.</li>
        <li>Developed small projects and prototypes.</li>
      </ul>

      <p><strong>Self-Directed Web Development Studies - 2020 - Present</strong></p>
      <ul>
        <li>Decided to transition from game development to frontend development.</li>
        <li>Focusing on React, JavaScript, and modern frontend practices.</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li><strong>Fading Light</strong><br />Fading Light is a top-down 2D puzzle solver with a strong focus on storytelling around mental health themes.<br />Developed over two years using C# and Unity Game Engine.</li>
        <li><strong>Nasa-SpaceViewer</strong> <br />NASA Space Viewer A React app that fetches and displays NASA’s Astronomy Picture of the Day (APOD) using the official NASA API. Users can explore stunning space images and videos from today or browse random dates in the archive, complete with smooth animations powered by Framer Motion.</li>
      </ul>
    
      <h2>Interests</h2>
      <p>Frontend development, UI/UX design, learning new technologies,<br/> creative coding, problem-solving.</p>
    </div>
  );
};

export default CV;