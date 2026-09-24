import "./App.css"
import HomePage from "./HomePage/HomePage.js"
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import BlogPost from "./Blog/BlogPost"
import Blog from "./Blog/Blog"

const App =()=> {
     return(
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/blog/:slug" element={ <BlogPost/>} />
       </Routes> 
      </BrowserRouter>
     )
}

export default App; 