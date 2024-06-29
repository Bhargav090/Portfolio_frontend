import React, { useState } from "react";
import '../home/home.css';
import { NavLink } from "react-router-dom";
import Card from "./Card";
import './card.css';

export default function Project({ showNavbar }) {
  const [projects] = useState([
    {
      id: 1,
      P_Image: "https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719619200&semt=ais_user",
      P_Desc: "It's is a Flutter application that brings you beautiful photographs capturing the essence of nature. This app allows you to view and download these stunning images.",
      P_Name: "NatureView2 Mobile App",
      P_Link: "https://github.com/Bhargav090/NatureView2_APP"
    },
    {
      id: 2,
      P_Image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQluOWYQmwwtT2tGDqxlHvkCzqO03jOZTVq9bu57pnqbRukUGSzfSQF7tpd19rIXnWsRi08hsLyrC05bWMdHvrb--r2-BOVMLuIyfWeYkbsfZZ4SKyOOvSVKRWX7yF7QtOfe0lA5UI&usqp=CAc",
      P_Desc: "A Social platform website developed for university students to post and access their college news and updates.",
      P_Name: "Your Way (Social Networking Platform)",
      P_Link: "https://your_way.com"
    },
    {
      id: 3,
      P_Image: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/E_Commerce_Policy_Draft_13746de06b.jpeg",
      P_Desc: "An E-Commerce Website where users can log in or sign up and purchase products by adding them to their cart.",
      P_Name: "Full Stack MERN E-Commerce Website",
      P_Link: "https://github.com/Bhargav090/E-Commerce-Frontend"
    },
    {
      id: 4,
      P_Image: "https://mpolaroid.online/images/logoed.jpg",
      P_Desc: "Developed a user-friendly e-commerce website for a client, enabling seamless purchasing of Polaroid pictures.",
      P_Name: "MPolaroid E-Commerce Website",
      P_Link: "https://mpolaroid.online/"
    },
    {
      id: 5,
      P_Image: "https://img.freepik.com/premium-vector/movie-review-logo-design_979099-151.jpg",
      P_Desc: "A Flutter application that displays reviews of newly released movies, providing users with up-to-date insights and ratings in a seamless and engaging interface.",
      P_Name: "Movie Review Mobile App",
      P_Link: "https://github.com/Bhargav090/Movie_review_app"
    },
    
  ]);

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
