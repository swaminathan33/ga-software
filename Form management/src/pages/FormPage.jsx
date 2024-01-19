import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../useContext";
import "../App.css";
import { Link } from "react-router-dom";

const FormPage = () => {
  const { form } = useGlobalContext();

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const [submitted, setSubmitted] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="formpage">
      <div className="form-content">
        <h3>Register Your Details</h3>
        <form action="" onSubmit={handleForm}>
          {form.map((item, id) => {
            return item.showForm ? (
              <div key={id} className="inside-form">
                <div className="title">
                  <label htmlFor="">{item.title}</label>
                </div>
                {item.required ? (
                  <div className="input">
                    <input
                      type={item.inputType}
                      placeholder={item.title}
                      required
                      onChange={handelSubmit}
                      maxLength="80"
                    />
                  </div>
                ) : (
                  <div className="input">
                    <input
                      type={item.inputType}
                      placeholder={item.title}
                      maxLength="80"
                    />
                  </div>
                )}
              </div>
            ) : (
              ""
            );
          })}
          {form.length > 0 && <button type="submit">Submit</button>}
        </form>
        {submitted ? "Form successfully submitted" : ""}
      </div>
    </div>
  );
};

export default FormPage;
