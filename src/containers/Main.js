// import React, { Component } from "react";
// import { Route, Switch, BrowserRouter } from "react-router-dom";
// import Home from "../pages/home/HomeComponent";
// import Splash from "../pages/splash/Splash";
// import Education from "../pages/education/EducationComponent";
// import Experience from "../pages/experience/Experience";
// import Opensource from "../pages/opensource/Opensource";
// import Contact from "../pages/contact/ContactComponent";
// import Projects from "../pages/projects/Projects";
// import { settings } from "../portfolio.js";
// import Error404 from "../pages/errors/error404/Error";

// export default class Main extends Component {
//   render() {
//     return (
//       <BrowserRouter basename="/">
//         <Switch>
//           <Route
//             path="/"
//             exact
//             render={(props) =>
//               settings.isSplash ? (
//                 <Splash {...props} theme={this.props.theme} />
//               ) : (
//                 <Home {...props} theme={this.props.theme} />
//               )
//             }
//           />
//           <Route
//             path="/home"
//             render={(props) => <Home {...props} theme={this.props.theme} />}
//           />
//           <Route
//             path="/experience"
//             exact
//             render={(props) => (
//               <Experience {...props} theme={this.props.theme} />
//             )}
//           />
//           <Route
//             path="/education"
//             render={(props) => (
//               <Education {...props} theme={this.props.theme} />
//             )}
//           />
//           <Route
//             path="/opensource"
//             render={(props) => (
//               <Opensource {...props} theme={this.props.theme} />
//             )}
//           />
//           <Route
//             path="/contact"
//             render={(props) => <Contact {...props} theme={this.props.theme} />}
//           />

//           {settings.isSplash && (
//             <Route
//               path="/splash"
//               render={(props) => <Splash {...props} theme={this.props.theme} />}
//             />
//           )}

//           <Route
//             path="/projects"
//             render={(props) => <Projects {...props} theme={this.props.theme} />}
//           />
//           <Route
//             path="*"
//             render={(props) => <Error404 {...props} theme={this.props.theme} />}
//           />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// ------------------------------------------------------------------
// -below code is bringing every component in header in its sepeate page-------------------
// ----------------------------------------------------------------------

// import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";

// import Home from "../pages/home/HomeComponent";
// import Education from "../pages/education/EducationComponent";
// import Experience from "../pages/experience/Experience";
// import Opensource from "../pages/opensource/Opensource";
// import Contact from "../pages/contact/ContactComponent";
// import Projects from "../pages/projects/Projects";
// import Error404 from "../pages/errors/error404/Error";

// export default class Main extends Component {
//   render() {
//     return (
//       <Switch>
//         <Route
//           exact
//           path="/"
//           render={(props) => <Home {...props} theme={this.props.theme} />}
//         />
//         <Route
//           path="/home"
//           render={(props) => <Home {...props} theme={this.props.theme} />}
//         />
//         <Route
//           path="/about"
//           render={(props) => <Home {...props} theme={this.props.theme} />}
//         />
//         <Route
//           path="/experience"
//           render={(props) => (
//             <Experience {...props} theme={this.props.theme} />
//           )}
//         />
//         <Route
//           path="/education"
//           render={(props) => (
//             <Education {...props} theme={this.props.theme} />
//           )}
//         />
//         <Route
//           path="/opensource"
//           render={(props) => (
//             <Opensource {...props} theme={this.props.theme} />
//           )}
//         />
//         <Route
//           path="/contact"
//           render={(props) => <Contact {...props} theme={this.props.theme} />}
//         />
//         <Route
//           path="/projects"
//           render={(props) => <Projects {...props} theme={this.props.theme} />}
//         />
//         <Route
//           render={(props) => <Error404 {...props} theme={this.props.theme} />}
//         />

//       </Switch>
//     );
//   }
// }

// -----------------------------------------------------------------------------
// -----i have converted all seperate page in one page home ---------------
// -----------------------------------------------------------------------

import React from "react";
import Home from "../pages/home/HomeComponent";

export default function Main(props) {
  return <Home theme={props.theme} />;
}
