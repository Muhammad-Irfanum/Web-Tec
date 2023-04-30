import React from "react";
function Contact(){
    return(
        <div>
       
    {/* <!-- form  --> */}
    <div class="contact" id="form">
        <h1 class="heading">Contact <span>Me!</span></h1>
        <form action=" ">
            <div class="input-box">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email-Address"/>
            </div>
            <div class="input-box">
                <input type="tel" placeholder="0313-2835909" pattern="[0-9]{4}-[0-9]{7}"/>
                <input type="text" placeholder="Email Subject"/>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
            <input type="button" value="Send Message" class="btn"/>
        </form>
    </div>

        </div>
    )
}
export default Contact