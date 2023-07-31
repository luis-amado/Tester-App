import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="banner">
        <h3 className="title">Create and apply exams to students easily.</h3>
        <p className="subtitle">Using tester, you can create your exams, organize your students and dramatically increase grading speed.</p>
        <Link className="action-btn" to="/signup">Get started now</Link>
      </div>
      <div className="features">
        <div className="feature">
          <div className="bx bxs-pencil"></div>
          <div className="feature-content">
            <h3>Simple to use</h3>
            <p>Get used to creating your exams in minutes.</p>
          </div>
        </div>
        <div className="feature">
          <div className="bx bx-clipboard"></div>
          <div className="feature-content">
            <h3>Instant grading</h3>
            <p>You can set up your exams to grade themselves</p>
          </div>
        </div>
        <div className="feature">
          <div className="bx bxs-cog"></div>
          <div className="feature-content">
            <h3>Highly customizable</h3>
            <p>Choose exactly what your students see and how they progress through the exam.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
