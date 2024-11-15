// import React from 'react';

// const Projects = () => {
//   return (
//     <section id="projects">
//       <h2>Projects</h2>
//       <ul>
//         <li>Project 1: Awesome Web App</li>
//         <li>Project 2: Another Cool Project</li>
//         <li>Project 3: My Portfolio Website</li>
//       </ul>
//     </section>
//   );
// };

// export default Projects;
import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
 import image from "../images/design-book-table.jpeg";

 const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Travel Website",
    description:
      "A user-friendly website HTML,CSS,Java Script for Froentend part and Node, Express for Backend Part and MongoDb for Database.. ",
    url: "https://github.com/santhakur123/Travel-Website",
  },
  {
    title: "Weather  APP Widget ",
    description:
      "A weather app widget is made by using my skills like React Js and materialUI used  to show the weather detail of every place i have used weather api for this..",
    url: "https://github.com/santhakur123/Weather-App-Widget",
  },
  {
    title: "E-commerce website",
    description:
      "A e-commerce type website using React,Tailwind Css for the froentend portion and Node, Express for Backend and MongoDb for the Database i am currently working on more features for this website",
    url: "https://github.com/santhakur123/e-commerceapp",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
           <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          /> 
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;