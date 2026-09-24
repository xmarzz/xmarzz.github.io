import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { parseFrontmatter } from "../utils/frontmatter";
import { calculateReadTime } from "../utils/calculateReadTime" 
import "./BlogPost.css"
import GMTClock from "../Components/GMTClock/GMTClock"
import {useNavigate} from "react-router-dom"

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`/articles/${slug}.md`)
      .then((res) => res.text())
      .then((raw) => {
        const parsed = parseFrontmatter(raw);
        const readTime = calculateReadTime(parsed.content); 
        setPost({...parsed, readTime});
      });
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <div className="blog-navbar">
       <div className="back-button"> <button onClick={() => navigate(-1)} className="back-link"> ← Back</button> 
      </div>

       <GMTClock/> 
      
      </div>
    <div className="blog-post-wrapper">
      <div className="blog-post">
        <h1>{post.data.title}</h1>
        <div className="blog-post-meta">
            {post.data.date && <span> {post.data.date} </span>}
            {post.data.date && <span className="dot">   •   </span>}
            <span>{post.readTime} min read</span>
        </div>
        <div className="blog-post-content"> 
            <ReactMarkdown children={post.content}></ReactMarkdown>
        </div>
     </div>
    </div>
    </div>
  );
};

export default BlogPost;

