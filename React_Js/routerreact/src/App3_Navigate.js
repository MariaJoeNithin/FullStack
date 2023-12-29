import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useParams } from "react-router-dom";
// import { useRoutes, useNavigate } from "react-router-dom";

const BlogPosts = {
  "React Basics": {
    title: "React - Fundamentals",
    description: " sjdbksdfsdfjdjb kjbkubsdkfise fcsjb cuds",
  },
  "React Router": {
    title: "React - Router Basics",
    description: " Welcome to React - Router Basics",
  },
};

function Home() {
  return (
    <div>
      <h2>Welcome To Blog of React Router</h2>
      <Outlet />
    </div>
  );
}

function Posts() {
  return (
    <div>
      <h2>Blog posts</h2>
      <Outlet />
    </div>
  );
}

function PostList() {
  return (
    <>
      <ul>
        {Object.entries(BlogPosts).map(([ss, { title }]) => (
          <li key={ss}>
            <Link to={`/posts/${ss}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function Post() {
  let { ss } = useParams();
  const post = BlogPosts[ss];
  if (!post) {
    return <span>The Blog You've Requested Doesn't Exist . </span>;
  }
  const { title, description } = post;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
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

function NoMatch() {
  return (
    <div>
      <h1>Error</h1>
      <p>404 Page Not Found</p>
    </div>
  );
}

function Stats({ user }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div style={{ padding: 20 }}>
      <h2>Stats View</h2>
      <p>kjsbruerzueuisuvi suev igue</p>
    </div>
  );
}

function Login({ onLogin }) {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();
  function handleLogin() {
    // for demonstration purpose only
    if (creds.username === "admin" && creds.password === "123") {
      onLogin && onLogin({ username: creds.username });

      navigate("/stats");
    } else if (creds.username === "" && creds.password === "") {
      alert("Please fill out all fields");
    } else {
      alert("Wrong Credentials");
    }
  }
  return (
    <div style={{ padding: 10 }}>
      <br />
      <span>Username : </span>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setCreds({ ...creds, username: e.target.value });
        }}
      />
      <br />
      <span>Password : </span>
      <br />
      <input
        type="password"
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      />

      <br />
      <button onClick={handleLogin}> Login</button>
    </div>
  );
}
function AppLayout() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  function logOut() {
    setUser(null);
    navigate("/");
  }

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Posts
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <span>|</span>
        {user && (
          <Link to="/stats" style={{ padding: 5 }}>
            Stats
          </Link>
        )}
        {!user && (
          <Link to="/login" style={{ padding: 5 }}>
            Login
          </Link>
        )}
        {user && (
          <span onClick={logOut} style={{ padding: 5, cursor: "pointer" }}>
            Logout
          </span>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />} />
          <Route path=":ss" element={<Post />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/stats" element={<Stats user={user} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

function AppNav() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
export default AppNav;
