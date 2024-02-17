import React from 'react'
import './myWork.css'

const myWork=()=>{


    const projects={
        "Face 2 Face":{
            title: "Face 2 Face",
            desc: "A web application designed to be mobile-friendly, tailored specifically to a local salon.",
            link: "https://github.com/xmarzz/Face2Face",
            open:"https://face2-face.vercel.app/",
            techstack: "Next.js, Tailwind css, Typescript"
        },
        "Artwork":{
            title:"Artwork web page",
            desc:"A platform where users can upload photos of their drawings or artworks on one page, and on another page, users can upload their music.",
            techstack:"Next.js, Cloudinary(backend), Auth 2.0",
            link:"https://github.com/xmarzz/artWork"
        },
        "Hiro Bot":{
            title: "Hiro Telegram Bot",
            desc:"",
            link:"https://github.com/xmarzz/Hiro-bot",
            techstack:"Javascript, Node.js, Telegram API"
        },
        "web Srcapper":{
            title:"web scrapper",
            desc:" The scraper is designed to navigate through a list of specified websites, extract relevant text and titles.",
            link: "https://github.com/xmarzz/web-scrapper",
            techstack:"Python, pip(package manager), virtualenv"
        },
        "Portfolio Page":{
            title : "Portfolio Page",
            desc:"A straightforward, responsive, and distinctive portfolio page",
            link:"https://github.com/xmarzz/xmarzz.github.io",
            techstack:"React.js, Javascript"
        },
    }

    return(
        <div className='myWork'>
            <h1 className='myWork_title'>/ software creation</h1>  
            <div className='myWork_line'><hr/></div>

        </div>
    )
}


export default myWork

