import React, { useState } from "react";

enum Role {
  TEACHER, STUDENT, UNSET
}

const SignupPage = () => {
  const [page, setPage] = useState(0);
  const [role, setRole] = useState(Role.UNSET);

  return (
    <div className="centered-container">
      <div className="signup-form">
        <h1 className="page-title">Sign up</h1>
        {page == 0 && <>
          <p className="subtitle">Enter your details to create an account</p>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="first-name">First name</label>
              <input type="text" id="first-name" />
            </div>
            <div className="input-group">
              <label htmlFor="last-name">Last name</label>
              <input type="text" id="last-name" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
          </div>
          <div className="button-row">
            <button onClick={() => setPage(1)} className="btn btn-primary">Continue &gt;</button>
          </div>
        </>}
        {page == 1 && <>
          <p className="subtitle">Select one of the following</p>
          <div className="input-row input-options-large">
            <button className={`input-option ${role == Role.TEACHER ? 'active' : ''}`} onClick={() => setRole(Role.TEACHER)}>
              <i className="bx bxs-notepad"></i>
              <p>I am a teacher</p>
            </button>
            <button className={`input-option ${role == Role.STUDENT ? 'active' : ''}`} onClick={() => setRole(Role.STUDENT)}>
              <i className="bx bxs-user"></i>
              <p>I am a student</p>
            </button>
          </div>
          <div className="button-row">
            <button disabled={role == Role.UNSET} onClick={() => setPage(2)} className="btn btn-primary">Create Account</button>
          </div>
        </>}
      </div>
    </div>
  );
};

export default SignupPage;

