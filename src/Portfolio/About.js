import React from "react";
 function About(){
    return(
        <div>
      
    {/* <!-- about section  --> */}
    <div id="about">
        <div className="image">
            image tag
        </div>
        <div className="pra">
        <h1>About <span>Me</span></h1>
        <h2>Full Stack Developer</h2>
      
        <p>
            
            creates websites and applications using web languages such as
            HTML, CSS, and JavaScript that allow users to access and interact
            with the site or app. When you visit a website,
            the design elements you see were created by a front-end developer.
            This is My first try to make a Website through a HTML and CSS;
            to make this Website page their are too many sections has used
            to make page attrective, give good an look for the user as well
            and in CSS creating many bodies to make a page beautiful
            and i am also trying for the best.

        </p>
    </div>
    
    </div>

    {/* <!-- contact us  --> */}

    <div id="contact">
        <h1> Contact <span>Information</span></h1>
        <div className="Information">
            <i className="fa-solid fa-phone"></i>
            <h2><span>Phone</span></h2>
            <p>03358419837</p>
            <p>03139047642</p>
        </div>

        <div className="Information">
            <i className="fa-solid fa-envelope"></i>
            <h2><span>Email</span></h2>
            <p>irfanum512@gmail.com</p>
        </div>

        
        <div className="Information">
            <i className="fa-solid fa-house-chimney"></i>
            <h2><span>Address</span></h2>
            <p>Comsats University Isalamabad Abbottabad Campus </p>
        </div>


    </div>
    



        </div>
    )
 }
 export default About