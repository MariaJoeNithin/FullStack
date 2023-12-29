import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Outlet,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>sdbkdb ksdc sub dcukds cisdc sdocksdcuogsodcsh csc</p>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>This is the Contact page.</p>
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h1>Error</h1>
      <p>404 Page Not Found</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/contact" style={{ padding: 5 }}>
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
