import React from 'react';
import "./about.css";
import Image from "../../assets/logo.png";
import AboutBox from './AboutBox';
import DE_CV from '../../assets/DE_CV.pdf'; 

const About = () => {
    return (
        <section className="about container section" id='about' data-testid="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img"/>

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am Meryem Kolbasar, a Full Stack Java Web Developer from Germany. 
                        I specialize in Frontend Development with expertise in React & Redux, and SASS, alongside foundational knowledge in HTML, CSS, and JavaScript. 
                        I have been working in this field for 1.5 years, creating various projects. 
                        On the Backend side, I am proficient in using the Spring Framework, Java, and SQL, with extensive experience and having worked on numerous projects during my bootcamp training.
                        I am also skilled in using Microsoft Word for document processing.</p>
                        <div className="cv-links">
                            <a href={DE_CV} className="btn" target="_blank" rel="noopener noreferrer"> DE | Download CV </a>
                        </div>
                    </div>

                    {/*  
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Frontend Development</h3>
                                <span className="skills__number ">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Backend Development</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Microsoft Word</h3>
                                <span className="skills__number ">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography"></span>
                            </div>
                        </div>
                    
                    </div>
                    */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;
