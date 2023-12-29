import React from "react";
// import { useState } from "react";
import "./port.css";

export default function PortF() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-secondary">
        <div className="container d-flex flex-row align-items-center justify-content-center">
          <p className="me-auto mb-2 mb-lg-0">
            <a className="navbar-brand " href="#home">
              Web<span className="text-danger">Dev</span>
            </a>
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section
        id="home"
        className="container-fluid mb-5 d-flex flex-column p-0 py-5"
      >
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-2 gy-3">
            <div className="col d-flex flex-column align-items-start justify-content-center">
              <h1 className="h1 fw-bold display-1">I'm John</h1>
              <p className="display-6 ">Front-End Developer</p>
              <p className="fs-4">turning ideas into interactive reality</p>
              <div className="d-flex gap-4 mt-4" id="smedia">
                <a href="https://github.com/MariaJoeNithin">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/maria-joe-nithin-j/">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="#">
                  <i class="bi bi-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col">
              <img
                src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/hero-01dff752.svg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="container-fluid d-flex flex-column p-0 my-5"
      >
        <div className="container">
          <h2>Tech Stack</h2>
          <hr />
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
            <div className="col">
              <i className="bx bxl-html5"></i>
              <h4>HTML&amp;CSS</h4>
              <p>
                Highly skilled in HTML &amp; CSS, adeptly crafting visually
                appealing and responsive websites for optimal user experiences.
              </p>
            </div>

            <div className="col">
              <i className="bx bxl-javascript"></i>
              <h4>Javascript</h4>
              <p>
                Expertise in JavaScript, building interactive and dynamic web
                applications with a focus on seamless user interactions and
                functionality
              </p>
            </div>
            <div className="col">
              <i className="bx bxl-react"></i>
              <h4>React</h4>
              <p>
                Advanced proficiency in React, developing efficient and
                interactive front-end applications with a strong emphasis on
                component-based architecture.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-2 gy-3">
            <div className="col">
              <img
                src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/about-03f57d6e.svg"
                alt=""
                style={{ maxHeight: "400px" }}
                className="img-fluid"
              />
            </div>
            <div className="col d-flex flex-column align-items-start justify-content-center">
              <h1 className="h1 fw-bold">Code And Coffee</h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                maiores itaque doloribus asperiores dolorum quas voluptates
                distinctio, porro beatae quam provident libero animi totam,
                praesentium voluptatem corrupti dignissimos ipsum accusantium!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="container-fluid d-flex flex-column justify-content-center p-0 "
      >
        <div className="container">
          <h2>Web Creations</h2>
          <hr className="mb-5" />
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-between gy-3 my-5">
            <div className="col">
              <div className="card shadow border border-0">
                <img
                  src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body p-4">
                  <h5 class="card-title">First Project</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex gap-4 mt-4" id="smedia">
                    <a href="https://github.com/MariaJoeNithin">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/maria-joe-nithin-j/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow border border-0">
                <img
                  src="https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-4">
                  <h5 className="card-title">Second Project</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex gap-4 mt-4" id="smedia">
                    <a href="https://github.com/MariaJoeNithin">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/maria-joe-nithin-j/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow border border-0">
                <img
                  src="https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-4">
                  <h5 className="card-title">Third Project</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex gap-4 mt-4" id="smedia">
                    <a href="https://github.com/MariaJoeNithin">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/maria-joe-nithin-j/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
