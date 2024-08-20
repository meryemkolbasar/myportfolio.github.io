import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
// import Pricing from "./components/pricing/Pricing";
// import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Sidebar data-testid="sidebar" />
      <main className="main">
        <Home data-testid="home" />
        <About data-testid="about" />
        <Services data-testid="services" />
        <Resume data-testid="resume" />
        <Portfolio data-testid="portfolio" />
        {/* <Pricing /> 
        <Testimonials /> */}
        <Blog data-testid="blog" />
        <Contact data-testid="contact" />
      </main>
    </>
  );
};

export default App;
