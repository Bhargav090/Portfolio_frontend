import React from 'react';
import './Skills.css'; // Create and import your CSS file

const skillsData = [
  { name: 'Flutter', img: 'https://w7.pngwing.com/pngs/537/866/png-transparent-flutter-hd-logo.png' },
  { name: 'HTML', img: 'https://e7.pngegg.com/pngimages/116/40/png-clipart-5-logo-angle-area-text-brand-other-html-5-angle-text.png' },
  { name: 'CSS', img: 'https://banner2.cleanpng.com/20180420/qcq/kisspng-web-development-responsive-web-design-cascading-st-css-5ada20d85ee519.3835589315242446963887.jpg' },
  { name: 'JavaScript', img: 'https://banner2.cleanpng.com/20180605/yjb/kisspng-javascript-programmer-node-js-web-application-vector-markup-language-5b173fc1d0a463.9294246915282503058546.jpg' },
  { name: 'Bootstrap', img: 'https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies.png' },
  { name: 'React.js', img: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png' },
  { name: 'Node.js', img: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png' },
  { name: 'Express.js', img: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' },
  { name: 'MongoDB', img: 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png' },
  { name: 'Firebase', img: 'https://www.gstatic.com/devrel-devsite/prod/vc3f2c9e1a38bbf17d13dba368cd3cbb8fa1d62d936b55c84ca4c54c7df2da66a/firebase/images/touchicon-180.png' },
  { name: 'C Programming', img: 'https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle-thumbnail.png' },
  { name: 'Python', img: 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg' },
  { name: 'Figma', img: 'https://w7.pngwing.com/pngs/911/515/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail.png' },
  { name: 'Git', img: 'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png' }
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
