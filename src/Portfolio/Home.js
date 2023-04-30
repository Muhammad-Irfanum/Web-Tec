import React from "react";

function Home(){
    return(
        <div>
           {/* <!--For Header Section--> */}
    <div className="main">
        <div className="logo">
            <h1><span>M</span>Y <span>F</span>IRST <span>W</span>EBSITE</h1>
        </div>
        <div class="menu">
            <a href="first.html">Home</a>
            <a href="About.js">About</a>
            <a href="project.js">Project</a>
            <a href="Contact.js">Contact </a>

        </div>
    </div>

    {/* <!-- home section --> */}
    <div id="home" >
        
        <div class="design-circle">
           <h2>
            
           Asalam O Alaikum...! <br></br>
                It's <span>IRFII</span> BANGASH <br />
                <span>WELCOME</span> To My Website<br/>
                I'm <span>Full Stack</span>  developer

                </h2>
    
        </div>
        <div class="table">
            <table>
             
                <tr>
                    <td><button>Feeds</button></td>
                    <td><button>Memories</button></td>
                
                </tr>
                <tr>
                    <td><button>Pages</button></td>
                    <td><button>Stories</button></td>
                  
                </tr>
                <tr>
                    <td><button>Friends</button></td>
                    <td><button>Images</button></td>
                </tr>
            </table>

        </div>
    </div>
        </div>
    );
}
export default Home