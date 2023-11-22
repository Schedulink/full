import React from "react";
import "./Home.css";

const Homepage = () => {
  return (
    <div>
      <div className="home-container">
        <div className="animation">
          <div className="schedulink">ScheduLink</div>
          <a href="/main" className="get-started-button">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
