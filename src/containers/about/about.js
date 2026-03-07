import React from "react";
import "./About.css";
import { Fade } from "react-reveal";

export default function About(props) {
  const theme = props.theme;

  return (
    <div className="about-main" id="about">
      <div className="about-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="about-header" style={{ color: theme.text }}>
            ABOUT
          </h1>
          <div
            className="about-underline"
            style={{ backgroundColor: theme.imageDark }}
          ></div>
        </Fade>
      </div>

      <Fade bottom duration={2000} distance="20px">
        <div className="about-text-div">
          <p className="about-text" style={{ color: theme.text }}>
            👋 Hi, I'm <strong>Nikhil Chowdary Paleti</strong>, an{" "}
            <strong>AI Engineer and Researcher</strong> 🧪🔬 with a passion for{" "}
            <strong>Machine Learning</strong>, <strong>Data Science</strong>,
            and <strong>Large Language Models (LLMs)</strong>.
          </p>
          <p className="about-text" style={{ color: theme.text }}>
            🎓 Currently pursuing my{" "}
            <strong>Master's in Data Science at UC San Diego</strong>, I am
            dedicated to pushing the boundaries of AI innovation.
          </p>
          <p className="about-text" style={{ color: theme.text }}>
            🚀 Welcome to my portfolio!
          </p>
        </div>
      </Fade>
    </div>
  );
}
