import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
//import Image3 from "../../assets/service-3.svg";

const frontendDescription = `
Expertise in creating responsive and intuitive user interfaces with HTML, CSS, JavaScript, React, and Redux.
`;

const backendDescription = `
Skilled in developing robust server-side applications using Core Java, Spring Framework (Spring MVC, Spring Boot), PostgreSQL, and API development.
`;

const fullstackDescription = `
Comprehensive knowledge in both frontend (HTML, CSS, JavaScript, React, Redux) and backend (Core Java, Spring Framework, PostgreSQL, MongoDB, RESTful APIs) for delivering end-to-end solutions.
`;

const data = [
  {
    id: 1,
    image: Image2,
    title: "Backend Development",
    description: backendDescription,
  },
  {
    id: 2,
    image: Image1,
    title: "Frontend Development",
    description: frontendDescription,
  },
  {
    id: 3,
    image: Image2,
    title: "Full-Stack Java Development",
    description: fullstackDescription,
  },
];

const Services = () => {
  return ( 
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt={title} className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
