import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import ValidationMessage from "../../components/ValidationMessage";

enum Role {
  TEACHER, STUDENT, UNSET
}

const SignupPage = () => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: Role.UNSET
  });

  const [validationMsg, setValidationMsg] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  });

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value
    });
    setValidationMsg({
      ...validationMsg,
      [e.currentTarget.name]: ""
    });
  };

  const updateRole = (role: Role) => {
    setFormData({
      ...formData,
      role
    });
    setValidationMsg({
      ...validationMsg,
      role: ""
    });
  };

  const continueForm = () => {

    //validate the input before continuing
    let valid = true;
    const validation = { firstName: "", lastName: "", email: "", password: "", role: "" };
    if (formData.firstName == "") {
      validation.firstName = "Field can't be empty";
      valid = false;
    }
    if (formData.lastName == "") {
      validation.lastName = "Field can't be empty";
      valid = false;
    }
    if (! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      validation.email = "Invalid email";
      valid = false;
    }
    if (formData.email == "") {
      validation.email = "Field can't be empty";
      valid = false;
    }
    if (formData.password.length < 8) {
      validation.password = "Password must be at least 8 characters.";
      valid = false;
    }
    if (formData.password == "") {
      validation.password = "Field can't be empty";
      valid = false;
    }
    setValidationMsg(validation);

    if (valid)
      setPage(1);
  };

  const goBack = () => {
    setPage(0);
  };
  const submitForm = () => {

    // make sure an option has been selected
    if (formData.role == Role.UNSET) {
      setValidationMsg({
        ...validationMsg,
        role: "Please select an option."
      });
      return;
    }

  };

  return (
    <div className="centered-container">
      <div className="signup-form">
        <h1 className="page-title">Sign up</h1>

        <div className={`form-step ${page == 0 ? 'form-step-active' : 'form-step-old'}`}>
          <p className="subtitle">Enter your details to create an account</p>
          <div className="input-row">
            <FormInput name="firstName" value={formData.firstName} validation={validationMsg.firstName} updateValue={updateFormData}>First name</FormInput>
            <FormInput name="lastName" value={formData.lastName} validation={validationMsg.lastName} updateValue={updateFormData}>Last name</FormInput>
          </div>
          <div className="input-row">
            <FormInput name="email" value={formData.email} validation={validationMsg.email} updateValue={updateFormData}>Email</FormInput>
          </div>
          <div className="input-row">
            <FormInput password name="password" value={formData.password} validation={validationMsg.password} updateValue={updateFormData}>Password</FormInput>
          </div>
          <div className="button-row button-row-submit">
            <button onClick={continueForm} className="btn btn-primary">Continue &gt;</button>
          </div>
        </div>

        <div className={`form-step ${page == 1 ? 'form-step-active' : ''}`}>
          <p className="subtitle">Select one of the following</p>
          <div className={`input-row input-options-large ${validationMsg.role != '' ? 'invalid' : ''}`}>
            <button className={`input-option ${formData.role == Role.TEACHER ? 'active' : ''}`} onClick={() => updateRole(Role.TEACHER)}>
              <i className="bx bxs-notepad"></i>
              <p>I am a teacher</p>
            </button>
            <button className={`input-option ${formData.role == Role.STUDENT ? 'active' : ''}`} onClick={() => updateRole(Role.STUDENT)}>
              <i className="bx bxs-user"></i>
              <p>I am a student</p>
            </button>
          </div>
          <ValidationMessage validation={validationMsg.role} />
          <div className="button-row button-row-submit">
            <button onClick={goBack} className="btn btn-secondary btn-smaller">&lt; Go Back</button>
            <button onClick={submitForm} className="btn btn-primary">Create Account</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;

