import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../useContext";
import "../App.css";

const FormPage = () => {
  const { form, fieldValues, fieldValuesDropdown } = useGlobalContext();
  // const dropdown = fieldValues.dropdown;
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const [submitted, setSubmitted] = useState(false);
  const [gender, setGender] = useState({
    male: null,
    female: null,
  });

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCheckbox = (e) => {
    setGender({
      ...gender,
      [e.target.name]: true,
    });
    console.log(gender);
  };

  return (
    <div className="formpage">
      <div className="form-content">
        <h3>Register Your Details</h3>
        {/* form */}
        <form action="" onSubmit={handleForm}>
          {form.map((item, id) => {
            return item.showForm ? (
              <div key={id} className="inside-form">
                <div className="title">
                  <label htmlFor="">{item.title}</label>
                </div>
                {item.inputType == "checkbox" ? (
                  <div className="checkbox">
                    <form action="">
                      <label htmlFor="">
                        <input
                          type="radio"
                          onChange={handleCheckbox}
                          name="male"
                        />
                        Male
                      </label>
                      <label htmlFor="">
                        <input
                          type="radio"
                          name="female"
                          onChange={handleCheckbox}
                        />
                        FeMale
                      </label>
                    </form>
                  </div>
                ) : item.inputType == "dropdown" ? (
                  <div className="dropdown">
                    <div className="dropdown-content">
                      <select
                        name="occupation"
                        id="occupation"
                        onChange={handelSubmit}
                      >
                        {fieldValuesDropdown.map((item, index) => {
                          return (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                ) : item.required ? (
                  <div className="input">
                    <input
                      type={item.inputType}
                      placeholder={item.placeholder}
                      required
                      onChange={handelSubmit}
                      maxLength="80"
                    />
                  </div>
                ) : (
                  <div className="input">
                    <input
                      type={item.inputType}
                      placeholder={item.placeholder}
                      maxLength="80"
                    />
                  </div>
                )}
              </div>
            ) : (
              ""
            );
          })}

          {/* dropdown  */}

          {form.length > 0 && <button type="submit">Submit</button>}
        </form>
        {/* form */}

        {submitted ? "Form successfully submitted" : ""}
      </div>
    </div>
  );
};

export default FormPage;
