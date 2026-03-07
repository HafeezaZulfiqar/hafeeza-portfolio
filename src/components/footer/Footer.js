// import React from "react";
// import "./Footer.css";
// import { Fade } from "react-reveal";
// import { greeting } from "../../portfolio.js";
// /* eslint-disable jsx-a11y/accessible-emoji */

// export default function Footer(props) {
//   return (
//     <div className="footer-div">
//       <Fade>
//         {/* <p className="footer-text" style={{ color: props.theme.secondaryText }}>
//           Made with <span role="img">❤️</span> by {greeting.title}
//         </p> */}
//         {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
//       </Fade>
//     </div>
//   );
// }
import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer() {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">
          © 2026 Hafeeza Zulfiqar. All rights reserved.
        </p>
      </Fade>
    </div>
  );
}
