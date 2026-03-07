// import React, { Component } from "react";
// import Header from "../../components/header/Header";
// import Greeting from "../../containers/greeting/Greeting";
// import Skills from "../../containers/skills/Skills";
// import Footer from "../../components/footer/Footer";
// import TopButton from "../../components/topButton/TopButton";

// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <Header theme={this.props.theme} />
//         <Greeting theme={this.props.theme} />
//         <Skills theme={this.props.theme} />
//         <Footer theme={this.props.theme} />
//         <TopButton theme={this.props.theme} />
//       </div>
//     );
//   }
// }

// export default Home;

import React, { Component } from "react";

/* Header & Common */
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

/* Home Sections */
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";

/* Pages converted into sections */
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../../containers/contact/Contact";

class Home extends Component {
  render() {
    const { theme } = this.props;

    return (
      <div>
        <Header theme={theme} />

        <section id="home">
          <Greeting theme={theme} />
        </section>

        <section id="education">
          <Education theme={theme} />
        </section>

        <section id="experience">
          <Experience theme={theme} />
        </section>

        <section id="projects">
          <Projects theme={theme} />
        </section>

        <section id="skills">
          <Skills theme={theme} />
        </section>

        {/* LAST SECTION */}
        <section id="contact">
          <Contact theme={theme} />
        </section>

        {/* FOOTER ONLY ONCE – AT THE VERY END */}
        <Footer />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
