import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //reactive values
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setBlogs(data);
      });
  }, []);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs!"
      /> */}
    </div>
  );
};

export default Home;
