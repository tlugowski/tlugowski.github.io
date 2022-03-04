import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import Skills from "./components/skillsList/SkillsList.jsx";
import Tools from "./components/toolsList/ToolsList.jsx";
import TimelineEducation from "./components/timelineEducation/TimelineEducation.jsx";
import TimelineExperience from "./components/timelineExperience/TimelineExperience.jsx";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Skills />
        <Tools />
        <TimelineExperience />
        <TimelineEducation />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
