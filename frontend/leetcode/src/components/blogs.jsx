import React ,{useState , useEffect}from "react";
import axios from "axios";
import "./blogs.css"

function BlogList() {

        const [blogs, setblogs] = useState([])
        
        async function init(){
            const response = await axios.get("http://localhost:3000/blogs")
            const result = response.data;
            setblogs(result)
        }
        useEffect( ()=>{
            init()
        },[]
    
        )


  return (
    <div className="blog-container">
      <h1 className="blog-heading">📚 Tech Blog</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h2 className="blog-title">{blog.title}</h2>
            <div className="blog-meta">
              <span>{blog.author}</span> • <span>{blog.date}</span>
            </div>
            <p className="blog-summary">{blog.summary}</p>
            <div className="blog-tags">
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="blog-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
