import React from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <About />
      <Projects />
    </div>
  );
}

const renderPage = () => {
  if (currentPage === "About Me") {
    return <About />;
  }
  if (currentPage === "Portfolio") {
    return <Projects />;
  }
  return <Contact />;
};

export default App;
