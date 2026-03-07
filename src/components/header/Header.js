// import React, { Component } from "react";
// import "./Header.css";
// import { Fade } from "react-reveal";
// import { NavLink, Link } from "react-router-dom";
// import { greeting, settings } from "../../portfolio.js";
// import SeoHeader from "../seoHeader/SeoHeader";

// const onMouseEnter = (event, color) => {
//   const el = event.target;
//   el.style.backgroundColor = color;
// };

// const onMouseOut = (event) => {
//   const el = event.target;
//   el.style.backgroundColor = "transparent";
// };

// class Header extends Component {
//   render() {
//     const theme = this.props.theme;
//     const link = settings.isSplash ? "/splash" : "home";
//     return (
//       <Fade top duration={1000} distance="20px">
//         <SeoHeader />
//         <div>
//           <header className="header">
//             <NavLink to={link} tag={Link} className="logo">
//               <span style={{ color: theme.text }}> &lt;</span>
//               <span className="logo-name" style={{ color: theme.text }}>
//                 {greeting.logo_name}
//               </span>
//               <span style={{ color: theme.text }}>/&gt;</span>
//             </NavLink>
//             <input className="menu-btn" type="checkbox" id="menu-btn" />
//             <label className="menu-icon" htmlFor="menu-btn">
//               <span className="navicon"></span>
//             </label>
//             <ul className="menu" style={{ backgroundColor: theme.body }}>
//               <li>
//                 <NavLink
//                   to="/home"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/education"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Education
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/experience"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Experience
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/projects"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Projects
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/opensource"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Open Source
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contact"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Contact Me
//                 </NavLink>
//               </li>
//             </ul>
//           </header>
//         </div>
//       </Fade>
//     );
//   }
// }
// export default Header;

// #----------------------------------------------------------------------

// import React, { Component } from "react";
// import "./Header.css";
// import { Fade } from "react-reveal";
// import { NavLink, Link } from "react-router-dom";
// import { greeting } from "../../portfolio.js";
// import SeoHeader from "../seoHeader/SeoHeader";

// const onMouseEnter = (event, color) => {
//   const el = event.target;
//   el.style.backgroundColor = color;
// };

// const onMouseOut = (event) => {
//   const el = event.target;
//   el.style.backgroundColor = "transparent";
// };

// class Header extends Component {
//   render() {
//     const theme = this.props.theme;
//     return (
//       <Fade top duration={1000} distance="20px">
//         <SeoHeader />
//         <div>
//           <header className="header">
//             <NavLink to="/home" tag={Link} className="logo">
//               <span style={{ color: theme.text }}> &lt;</span>
//               <span className="logo-name" style={{ color: theme.text }}>
//                 {greeting.logo_name}
//               </span>
//               <span style={{ color: theme.text }}>/&gt;</span>
//             </NavLink>
//             <input className="menu-btn" type="checkbox" id="menu-btn" />
//             <label className="menu-icon" htmlFor="menu-btn">
//               <span className="navicon"></span>
//             </label>
//             <ul className="menu" style={{ backgroundColor: theme.body }}>
//               <li>
//                 <NavLink
//                   to="/home"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/education"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Education
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/experience"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Experience
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/projects"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Projects
//                 </NavLink>
//               </li>
//               {/* <li>
//                 <NavLink
//                   to="/opensource"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Open Source
//                 </NavLink>
//               </li> */}
//               <li>
//                 <NavLink
//                   to="/contact"
//                   tag={Link}
//                   activeStyle={{ fontWeight: "bold" }}
//                   style={{ color: theme.text }}
//                   onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//                   onMouseOut={(event) => onMouseOut(event)}
//                 >
//                   Contact Me
//                 </NavLink>
//               </li>
//             </ul>
//           </header>
//         </div>
//       </Fade>
//     );
//   }
// }
// export default Header;

import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  event.target.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  event.target.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const { theme } = this.props;

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <header className="header" style={{ backgroundColor: theme.body }}>
          {/* LOGO */}
          <a href="#home" className="logo">
            <span className="logo-name" style={{ color: theme.text }}>
              Hafeeza Zulfiqar
            </span>
          </a>

          {/* MOBILE MENU TOGGLE */}
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          {/* MENU */}
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <a
                href="#home"
                style={{ color: theme.text }}
                onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#education"
                style={{ color: theme.text }}
                onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#experience"
                style={{ color: theme.text }}
                onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                style={{ color: theme.text }}
                onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                style={{ color: theme.text }}
                onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </header>
      </Fade>
    );
  }
}

export default Header;
