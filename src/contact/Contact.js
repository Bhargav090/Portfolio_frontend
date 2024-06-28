import React, { useState } from "react";
import axios from "axios";
import "./cont.css";
import insta from "../images/instaalogo.jpg";
import github from "../images/GitHublogo.png";
import mail from "../images/mail.jpg";
import linkedin from "../images/linkedinnn.png";
import '../home/home.css';
import { NavLink } from "react-router-dom";
import url from '../url';

function Contact({ Isnavbar }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/send-email`, formData);
      //alert('Message Sent Successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      //alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div>
      {Isnavbar && (
        <div className="navbar">
          <h2 className="nameh">Bhargav Pathivada</h2>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      )}
      <h1 className="conh">Contact</h1>
      <div className="contact-form">
        <h2 className="conh2">Get In Touch</h2>
        <form>
          <div className="form-group">
            <label>Name :</label>
            <input
              name="name"
              type="text"
              title="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email :</label>
            <input
              name="email"
              type="email"
              title="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message :</label>
            <input
              name="message"
              type="text"
              title="Type your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button" onClick={Submit}>
            Submit
          </button>
        </form>
      </div>
      <div class="allimg">
        <a href="https://www.linkedin.com/in/bhargav-pathivada-271182237" target="_blank" rel="noopener noreferrer" className="profilelink"><img src={linkedin} alt="Linkedin Profile" class="imgsoc imagsoc2" /></a>
        <a href="https://github.com/Bhargav090" target="_blank" rel="noopener noreferrer" className="profilelink"><img src={github} alt="GitHub Profile" class="imgsoc imagsoc2 soc2" /></a>
        <a href="https://instagram.com/_bhargav_09?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" className="profilelink"><img
          src={insta}
          alt="Instagram Profile"
          class="imgsoc soc2 imagsoc2"
        /></a>
        <a href="mailto:bhargav.pathivada090@gmail.com" rel="noopener noreferrer" className="profilelink"><img src={mail} alt="Mail" class="imgsoc mailimg" width='60px'/></a>
      </div>
    </div>
  );
}

export default Contact;
