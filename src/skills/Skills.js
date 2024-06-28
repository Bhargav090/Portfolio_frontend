import React from 'react';
import './Skills.css'; // Create and import your CSS file

const skillsData = [
  { name: 'Flutter', img: 'https://img.icons8.com/color/48/000000/flutter.png' },
  { name: 'HTML', img: 'https://img.icons8.com/color/48/000000/html-5.png' },
  { name: 'CSS', img: 'https://img.icons8.com/color/48/000000/css3.png' },
  { name: 'JavaScript', img: 'https://img.icons8.com/color/48/000000/javascript.png' },
  { name: 'Bootstrap', img: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
  { name: 'React.js', img: 'https://img.icons8.com/color/48/000000/react-native.png' },
  { name: 'Node.js', img: 'https://img.icons8.com/color/48/000000/nodejs.png' },
  { name: 'Express.js', img: 'https://img.icons8.com/color/48/000000/express.png' },
  { name: 'MongoDB', img: 'https://img.icons8.com/color/48/000000/mongodb.png' },
  { name: 'Firebase', img: 'https://img.icons8.com/color/48/000000/firebase.png' },
  { name: 'C Programming', img: 'https://img.icons8.com/color/48/000000/c-programming.png' },
  { name: 'Python', img: 'https://img.icons8.com/color/48/000000/python.png' },
  { name: 'UI/UX', img: 'https://img.icons8.com/color/48/000000/design.png' },
  { name: 'Figma', img: 'https://img.icons8.com/color/48/000000/figma.png' },
  { name: 'Git', img: 'https://img.icons8.com/color/48/000000/git.png' }
];

function Skills() {
  return (
    <div className="skill">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid skills-container">
        {skillsData.map(skill => (
          <div className="skill-item" key={skill.name}>
            <img src={skill.img} alt={skill.name} className="skill-img" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
