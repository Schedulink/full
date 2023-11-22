import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="ab">
      <div className="about-container">
        <h2>ABOUT SCHEDULINK</h2>
        <div className="point">
          <p>
            <span>Welcome to the Schedulink!</span> Our application is designed
            to help you efficiently create and manage your schedules.
          </p>
          <p>
            <span>
              A timetable management system for colleges and universities.
            </span>{" "}
            It helps schedule their organization's timetable.
          </p>
          <p>
            <span>Using Schedulink, you can easily</span> view and compare
            different schedules to find the one that works best for you.
          </p>
          <p>
            <span>With our application,</span> you can input your preferences,
            constraints, and courses, and we'll do the hard work of generating
            timetables for you.
          </p>
          <p>
            <span>Schedulink started off as a solution</span> to help
            organizations generate their timetable with ease and maximum
            efficiency, thus saving valuable time.
          </p>
          <p>
            <span>We're committed to providing you with</span> a seamless
            scheduling experience. If you have any questions or feedback, please
            feel free to contact us.
          </p>
        </div>
        <div className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-box">
            <h1>ADDRESS</h1>
            <p>Sardar Patel Road</p>
            <p>Anna University</p>
            <p>Chennai - 600 025</p>
            <p>Tamil Nadu</p>
          </div>
          <div className="contact-box">
            <h1>EMAIL</h1>
            <p>Admissions: dircfa@annauniv.edu</p>
            <p>Administration: registrar@annauniv.edu</p>
            <p>Examinations: acoeud@annauniv.edu</p>
            <p>Student Affairs: dsa@annauniv.edu</p>
          </div>
          <div className="contact-box">
            <h1>PHONE</h1>
            <p>Admissions: 044 - 2235 8314</p>
            <p>Examinations: 044 - 2235 7295</p>
            <p>Examinations: 044 - 2235 7853 (ACoE)</p>
            <p>Student Affairs: 044 - 2235 7080</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
