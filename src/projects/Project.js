import React, { useState, useEffect } from "react";
import '../home/home.css'
import { NavLink } from "react-router-dom";
import Card from "./Card";
import url from '../url.js'
import './card.css'
import axios from 'axios'

export default function Project({ showNavbar }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + '/projects')
        setProjects(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData();
    console.log(fetchData())
  }, []);

  return (
    <div className="project">
      {showNavbar && (
        <div className="navbar">
          <h2 className="nameh">Bhargav Pathivada</h2>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      )}
      <div>
        <h2 className="projecth">Projects</h2>
        <div className="list">
          {projects.map((project) => (
            <Card 
              key={project.id}
              image={project.P_Image}
              description={project.P_Desc}
              name={project.P_Name}
              link={project.P_Link} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
