import React from 'react'
import './About.css'


const About =()=>{

    const skills = ["Javascript + ES6", "ReactJS + redux","Node.js","HTML & CSS","Java","Python"]

    return (
        <div className='about'>
            <div className='about_inside'>/ about me</div>
            <div className='about_details'>
             I've always sought out opportunities and challenges that are meaninful to me. 
             although my professional path has taken many twists and turns. i'm currently based
             in india, i'm not currently working anywhere and am open to opportunities.
             </div>
             <div className='about_tech'>i'm familiar working with:</div>

          
              <ul className='about_lists'>
                {skills.map((skill)=> <li>{skill}</li> )}
              </ul>


             <div className='about_actualMe'>
                When i'm not working, i enjoy immersing myself in the world of science,
                keeping up with latest advancements. i have a voracious appetite for reading
                and delve into a wide range of topics. additionally, i find enjoyment in playing
                various games as a way to unwind and have fun.
             </div>
         </div>
    )
}


export default About 
