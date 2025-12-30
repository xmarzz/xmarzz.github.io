import React,{useState, useRef, useEffect} from 'react'
import "./FadeInSection.css"

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef()     

    useEffect(() =>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            }); 
        }, {
            threshold: 0.15
        })
        const currentRef = domRef.current; 
        if(currentRef) observer.observe(currentRef)
            return () => {
                if(currentRef) observer.unobserve(currentRef); 
            }
    },[])

  return (
    <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`}  
      ref={domRef} >
        {props.children}
    </div> 
  )
}

export default FadeInSection
