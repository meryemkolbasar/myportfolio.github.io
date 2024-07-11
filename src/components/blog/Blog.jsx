import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
//import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://www.linkedin.com/posts/meryemkolbasar_github-meryemkolbasarmini-projects-i-activity-7191171186809090049-o6Ng?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="https://www.linkedin.com/posts/meryemkolbasar_github-meryemkolbasarmini-projects-i-activity-7191171186809090049-o6Ng?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
              <img src={Image1} alt="GitHub Mini Projects With Detailed Explanations" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              GitHub Mini Projects With Detailed Explanations
            </h3>
            <div className="blog__meta">
              <span>10 May, 2024</span>
              <span className="blog__dot">.</span>
              <span>Meryem</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://www.linkedin.com/posts/meryemkolbasar_github-meryemkolbasarmyportfolio-project-activity-7185884717383057410-GYGy?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="https://www.linkedin.com/posts/meryemkolbasar_github-meryemkolbasarmyportfolio-project-activity-7185884717383057410-GYGy?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
              <img src={Image3} alt="GitHub React Portfolio Website" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">GitHub React Portfolio Website</h3>
            <div className="blog__meta">
              <span>01 May, 2024</span>
              <span className="blog__dot">.</span>
              <span>Meryem</span>
            </div>
          </div>
        </div>

        {/* <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Business</span>
            </a>
            <a href="#">
              <img src={Image3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              3 Things to know about startup business
            </h3>
            <div className="blog__meta">
              <span>05 February, 2022</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
