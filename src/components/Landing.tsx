import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
  <div className="landing-section" id="landingDiv">
    <div className="landing-container">

      <div className="landing-intro">
        <h2>Hello! I'm Meghna</h2>
        <h1>
          Meghna <br />
          <span>Nagabhooshana</span>
        </h1>
      </div>

      <div className="landing-info">
        <h3>Graduate Software Engineer</h3>
      </div>

      {children}

    </div>
  </div>
);
};

export default Landing;
