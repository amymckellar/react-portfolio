import React from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = React.useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    return <Projects />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage()}</div>
    </div>
  );
}
