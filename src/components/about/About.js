import React from 'react'
import './About.css'
// import welcome from '././../../media/welcome.png'

const About = () => {
return (
    <div className="about-container">
        <div className="about-desc"> 
            <h3>The magic of cocktails</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            provident inventore quod voluptates sequi. Quis, necessitatibus omnis
            iusto perferendis dolores voluptate et dolorum inventore autem nemo,
            quos eveniet magni nesciunt. 
            </p>
        </div>
        <div className="about-img">
            <img 
            src= "/media/welcome.png" alt='about'></img>
         {/* <img src={welcome} alt='about'></img>  */}
        </div>
    </div>
);
};

export default About