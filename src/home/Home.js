import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
import Project from "../projects/Project";
import Img from '../images/Bhargav_image.jpg'
import Education from "../education/Education";
import Exp from "../experience/Exp";
import Contact from "../contact/Contact";
import Skills from "../skills/Skills";
import { FaBars } from "react-icons/fa";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <div className="navbar">
        <h2 className="nameh">Bhargav Pathivada</h2>
        <div className={`links ${showNavbar ? "active" : ""}`}>
          <NavLink to="/" className='navlinkss'>Home</NavLink>
          <NavLink to="/projects" className='navlinkss'>Projects</NavLink>
          <NavLink to="/contact" className='navlinkss'>Contact</NavLink>
        </div>
        <FaBars className="hamburger" onClick={handleToggleNavbar} />
      </div>
      <div className="maincontent">
        <h2 className="mainhead">
          Hello! &nbsp; <span className="spanh">&lt; I'm Bhargav Pathivada /&gt;</span> <br></br>I
          am a skilled Flutter developer with experience in creating
          user-friendly mobile applications. Additionally, I have a strong
          background in full stack web development and have successfully
          completed numerous real-world projects.
        </h2>
        <img src={Img} alt="Bhargav Pathivada" className="myimg" />
      </div><br></br><br></br><br></br><br></br>
      <Exp /><br></br><br></br><br></br><br></br>
      <Project showNavbar={false} /><br></br><br></br><br></br><br></br>
      <Skills /><br></br><br></br><br></br><br></br>
      <Education /><br></br><br></br><br></br><br></br>
      <Contact Isnavbar={false} />
    </div>
  );
}
