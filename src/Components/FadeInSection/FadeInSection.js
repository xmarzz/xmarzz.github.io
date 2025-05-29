import React,{useState, useRef, useEffect} from 'react'

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef()     

    useEffect(() =>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting)); 
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
