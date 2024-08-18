import React from 'react';

const HeaderSocials = () => {
  return (
    <div className="home__socials">  
      <a 
        href="https://www.instagram.com/devmeryemkolbasar/" 
        className="home__social-link" 
        target="_blank" 
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a 
        href="https://www.linkedin.com/in/meryemkolbasar/" 
        className="home__social-link" 
        target="_blank" 
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a 
        href="https://github.com/meryemkolbasar" 
        className="home__social-link" 
        target="_blank" 
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      
      <a 
        href="https://www.xing.com/profile/Meryem_Kolbasar/web_profiles" 
        className="home__social-link" 
        target="_blank" 
        rel="noreferrer"
      >
        <i className="fa-brands fa-xing"></i>
      </a>

      <a 
        href="https://medium.com/@kolbasarmeryem" 
        className="home__social-link" 
        target="_blank" 
        rel="noreferrer"
      >
        <i className="fa-brands fa-medium"></i>
      </a>

    </div>
  );
};

export default HeaderSocials;