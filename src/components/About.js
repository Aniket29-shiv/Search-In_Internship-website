import React from "react";

import "./component.css";
import img1 from "../images/learn.jpg";
import img2 from "../images/new_skills.jpg";
import img3 from "../images/flexible_time.jpg";

const About = () => {
    return (
        <div id="About">
            <div className="about">
                <div className="about-text">
                    <h1 className="gradient__text2">Get Exposure to Tech</h1>
                    <p>
                        Internships helps students to acquire in-demand technical skills, helps to learn professional
                        ethics or etiquette and helps in polishing the soft skills. Students get an opportunity to
                        expose themselves to the actual work environment, contrasting with their textbook theories.
                        Having the proficiency to apply theories in practical work is very important and internship
                        gives you the right platform for testing your efficiencies.
                    </p>
                </div>
                <div className="about-img">
                    <img src={img1} style={{ width: "80%" }} />
                </div>
            </div>
            <div className="about">
                <div className="about-img">
                    <img src={img3} style={{ width: "80%" }} />
                </div>
                <div className="about-text">
                    <h1 className="gradient__text2">Work Any Time</h1>
                    <p>
                        In light of the events of 2021, flexible working arrangements will become the new normal moving
                        forward. In many cases, we are actively encouraging our employees to take advantage of flexible
                        working opportunities that enhance productivity and offer their employees greater choice.
                    </p>
                </div>
            </div>
            <div className="about">
                <div className="about-text">
                    <h1 className="gradient__text2">Learn New Skills</h1>
                    <p>
                        During internships students enter a work- life which teaches them work ethics and slowly they
                        gain a competitive edge over the fellow interns. The behaviour of showing the best of your
                        version always proves to be of utmost benefit during jobs and making a successful career.
                    </p>
                </div>
                <div className="about-img">
                    <img src={img2} style={{ width: "80%" }} />
                </div>
            </div>
        </div>
    );
};

export default About;
