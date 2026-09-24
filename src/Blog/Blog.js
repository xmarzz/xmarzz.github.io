import {React, useEffect, useState} from "react"
import "./Blog.css"
import { LuSquareArrowOutDownRight } from "react-icons/lu";
import { parseFrontmatter } from "../utils/frontmatter"
import {Link} from 'react-router-dom'
import GMTClock from "../Components/GMTClock/GMTClock";


const Blog = () => { 

  const [articles, setArticles] = useState([]); 

      useEffect(() =>{
        fetch('/articles/manifest.json')
        .then((res) =>res.json())
        .then((slugs)=> { 
        Promise.all(
          slugs.map((slug) => 
          fetch(`/articles/${slug}.md`)
          .then((res) => res.text())
          .then((raw) => {
            const {data} = parseFrontmatter(raw); 
            console.log(data); 
            return{
              slug, 
              name : data.title, 
              excerpt : data.excerpt, 
            }
          })
      )
    ).then(setArticles); 
    })
    }, []); 


  return (
    <div>
      <div><GMTClock/></div>
    <div className="blog">
      <div className="intro">
        <div className="heading">BLOG</div>
        <div className="subtitle">
          This page is yet to be developed. Please come back later for more content!
        </div>
      </div>

      <div className="articles">
         {articles.map((item) => (
           <Link key={item.slug} to={`/blog/${item.slug}`} className="article-items">
            <div className="article-details">
              <div className="article-title">{item.name}</div>
              <div className="article-excerpt">{item.excerpt}</div>
            </div>
            <div className="article-arrow">
              <LuSquareArrowOutDownRight size={32}/>
            </div>
          </Link>
         ))}
      </div>
    </div>
    </div>
  )
}


export default Blog


