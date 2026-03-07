// import React from "react";
// import "./Contact.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
// // import { contactInfo } from "../../portfolio";
// import { contactPageData } from "../../portfolio";

// export default function Contact() {
//   return (
//     <div className="main contact-margin-top" id="contact">
//       <div className="contact-div-main">
//         <div className="contact-header">
//           <h1 className="heading contact-title">{contactInfo.title}</h1>
//           <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

//           <div className="contact-text-div">
//             <a className="contact-detail" href={"tel:" + contactInfo.number}>
//               {contactInfo.number}
//             </a>
//             <br />
//             <br />
//             <a
//               className="contact-detail-email"
//               href={"mailto:" + contactInfo.email_address}
//             >
//               {contactInfo.email_address}
//             </a>
//             <br />
//             <br />
//             <SocialMedia />
//           </div>
//         </div>
//         <div className="contact-image-div">
//           <img
//             alt="Saad Working"
//             src={require("../../assets/images/contactMail.png")}
//           ></img>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./Contact.css";
import profileImage from "../../assets/images/linkedin.jpeg";

export default function Contact() {
  return (
    <div className="contact-div-main">
      <div className="contact-text-div">
        <p className="contact-heading animate-text">Contact Me</p>

        <p className="contact-description">
          Ready to collaborate on the next big AI innovation?
          <br />
          Let’s build something amazing together.
        </p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> hafeezazulfiqar2@email.com
          </p>
          <p>
            <strong>Phone:</strong> +923090167557
          </p>
        </div>
      </div>

      <div className="contact-image-div">
        <img
          src={profileImage}
          alt="Profile"
          className="contact-profile-image"
        />
      </div>
    </div>
  );
}
