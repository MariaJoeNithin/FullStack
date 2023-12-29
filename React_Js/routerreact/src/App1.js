import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Outlet,
} from "react-router-dom";
import { useParams } from "react-router-dom";

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

function NoMatch() {
  return (
    <div>
      <h1>Error</h1>
      <p>404 Page Not Found</p>
    </div>
  );
}

export default function App1() {
  return (
    <Router>
      <nav>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Posts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />} />
          <Route path=":ss" element={<Post />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
