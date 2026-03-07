// import React, { Component } from "react";
// import "./Skills.css";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
// import { skills } from "../../portfolio";
// import { Fade } from "react-reveal";
// import DataScienceImg from "./DataScienceImg";
// import FullStackImg from "./FullStackImg";
// import CloudInfraImg from "./CloudInfraImg";
// import DesignImg from "./DesignImg";

// function GetSkillSvg(props) {
//   if (props.fileName === "DataScienceImg")
//     return <DataScienceImg theme={props.theme} />;
//   else if (props.fileName === "FullStackImg")
//     return <FullStackImg theme={props.theme} />;
//   else if (props.fileName === "CloudInfraImg")
//     return <CloudInfraImg theme={props.theme} />;
//   return <DesignImg theme={props.theme} />;
// }

// class SkillSection extends Component {
//   render() {
//     const theme = this.props.theme;
//     return (
//       <div>
//         {skills.data.map((skill, i) => (
//           <div key={i} className="skills-main-div">
//             <Fade left duration={2000}>
//               <div className="skills-image-div">
//                 <GetSkillSvg fileName={skill.fileName} theme={theme} />
//               </div>
//             </Fade>

//             <div className="skills-text-div">
//               <Fade right duration={1000}>
//                 <h1 className="skills-heading" style={{ color: theme.text }}>
//                   {skill.title}
//                 </h1>
//               </Fade>

//               <Fade right duration={1500}>
//                 <SoftwareSkill logos={skill.softwareSkills} />
//               </Fade>

//               <Fade right duration={2000}>
//                 <div>
//                   {skill.skills.map((skillSentence, i) => (
//                     <p
//                       key={i}
//                       className="subTitle skills-text"
//                       style={{ color: theme.secondaryText }}
//                     >
//                       {skillSentence}
//                     </p>
//                   ))}
//                 </div>
//               </Fade>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default SkillSection;
import React, { Component } from "react";
import "./Skills.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

class SkillSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  handleTabClick = (index) => {
    this.setState({ activeTab: index });
  };

  render() {
    const theme = this.props.theme;
    const { activeTab } = this.state;

    return (
      <div className="tech-stack-container">
        <Fade bottom duration={1000}>
          <div className="tech-stack-tabs">
            {techStack.map((category, index) => (
              <button
                key={index}
                className={`tech-tab ${activeTab === index ? "active" : ""}`}
                onClick={() => this.handleTabClick(index)}
                style={{
                  backgroundColor:
                    activeTab === index
                      ? theme.imageHighlight
                      : theme.compImgHighlight,
                  color: activeTab === index ? "#fff" : theme.text,
                  border: `2px solid ${
                    activeTab === index ? theme.imageHighlight : "transparent"
                  }`,
                }}
              >
                {category.title}
              </button>
            ))}
          </div>
        </Fade>

        <Fade bottom duration={1500} key={activeTab}>
          <div className="tech-stack-content">
            {techStack[activeTab].data.map((skill, i) => (
              <div key={i} className="tech-item">
                <span
                  className="tech-label"
                  style={{ color: theme.imageHighlight }}
                >
                  {skill.label}:
                </span>
                <span
                  className="tech-value"
                  style={{ color: theme.secondaryText }}
                >
                  {skill.value}
                </span>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    );
  }
}

export default SkillSection;
