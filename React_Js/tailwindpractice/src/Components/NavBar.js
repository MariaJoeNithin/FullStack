import React, { useState } from "react";
import skillSafariLogo from "./Skill Safari Logo.png";
// import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [JrpOpen, setJrpOpen] = useState(false);
  const [IpOpen, setIpOpen] = useState(false);
  const [eopen, setEOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setJrpOpen(false);
    setIpOpen(false);
    setEOpen(false);
  };

  const toggleJrp = () => {
    setJrpOpen(!JrpOpen);
    setIpOpen(false);
    setEOpen(false);
  };

  const toggleIp = () => {
    setIpOpen(!IpOpen);
    setJrpOpen(false);
    setEOpen(false);
  };

  const toggleEv = () => {
    setEOpen(!eopen);
    setIpOpen(false);
    setJrpOpen(false);
  };

  return (
    <>
      <nav
        className="flex justify-center py-10 md:px-10 px-5 shadow-xl relative"
        // style={{ maxHeight: "96px" }}
      >
        <div className="container w-100vw lg:w-4/5 md:100vw flex justify-between gap-5">
          <div className="Navbd">
            {/* <Link to="/" style={{ padding: 5 }}>
            <img
              src={skillSafariLogo}
              alt="SkillSafariLogo"
              title="SkillSafari"
            />
          </Link> */}
            <a href="#">
              <img
                src={skillSafariLogo}
                alt="SkillSafariLogo"
                title="SkillSafari"
                style={{ height: "168", width: "auto" }}
              />
            </a>
          </div>
          <div className="NavList ">
            <button
              onClick={toggleMenu}
              className="md:hidden border rounded p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div
              className={` NavItems md:block  ${
                menuOpen ? "block" : "hidden"
              } md:justify-end`}
            >
              <ul className="navList flex flex-col md:flex-row absolute md:relative gap-5 border md:border-0 w-4/5 shadow-lg md:shadow-none md:w-auto bg-white md:bg-none md:p-0 p-5 rounded ">
                <li className=" flex justify-center">
                  <button className="flex list" onClick={toggleJrp}>
                    Job Ready Program
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`flex flex-col absolute translate-y-7 border rounded p-3 gap-5 bg-white ${
                      JrpOpen ? "block" : "hidden"
                    }`}
                  >
                    <a href="#">
                      <div className="grid dropdown-content grid-cols-3  justify-center">
                        <div className="col-span-1 col-start-1 w-45 iconnew py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="col-span-1 col-start-2 textcnt">
                          Full Stack Developer Program
                        </div>
                        <div className="col-span-1 col-start-3 w-45 dropArrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="grid dropdown-content grid-cols-3 justify-center">
                        <div className="col text iconnew py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                            />
                          </svg>
                        </div>
                        <div className="col">
                          Data Science and Machine Learning Experts
                        </div>
                        <div className="dropArrow col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
                <li className=" flex justify-center">
                  <a className="list" href="/learnHub">
                    Learning Hub
                  </a>
                </li>
                <li className=" flex justify-center">
                  <button className="flex list" onClick={toggleIp}>
                    Intership Program
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`flex flex-col w-max absolute border translate-y-7 rounded p-3 gap-5 bg-white ${
                      IpOpen ? "block" : "hidden"
                    }`}
                  >
                    <a href="#">
                      <div className="grid dropdown-content grid-cols-3 justify-center">
                        <div className="iconnew col py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="col">Web Developer</div>
                        <div className="col dropArrow ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="grid dropdown-content grid-cols-3 justify-center">
                        <div className="col text iconnew py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                            />
                          </svg>
                        </div>
                        <div className="col">Data Analytics</div>
                        <div className="col dropArrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
                <li className=" flex justify-center">
                  <a className="list" href="/learnHub">
                    Hire From Us
                  </a>
                </li>
                <li className=" flex justify-center">
                  <a className="list" href="/learnHub">
                    Blog
                  </a>
                </li>
                <li className=" flex justify-center">
                  <button className="flex list" onClick={toggleEv}>
                    Events
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`flex flex-col w-max absolute border translate-y-7 rounded p-3 gap-5 bg-white ${
                      eopen ? "block" : "hidden"
                    }  md:right-0 md:translate-x-10 `}
                  >
                    <a href="#">
                      <div className="grid dropdown-content grid-cols-3 justify-center">
                        <div className="iconnew col py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="col">
                          Build a web <br /> developer portfolio
                        </div>
                        <div className="col dropArrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="grid dropdown-content grid-cols-3 justify-center">
                        <div className="col text iconnew py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                            />
                          </svg>
                        </div>
                        <div className="col">
                          Introduction to Data <br /> Analytics With MS Excel
                        </div>
                        <div className="dropArrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="grid dropdown-content grid-cols-3 justify-center">
                        <div className="col text iconnew py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                            />
                          </svg>
                        </div>
                        <div className="col">
                          Build a web developer <br /> portfolio Offline
                        </div>
                        <div className="col dropArrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
