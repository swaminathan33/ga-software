import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../useContext";
import "../App.css";

const FormPage = () => {
  const { form, fieldValues, fieldValuesDropdown } = useGlobalContext();
  // const dropdown = fieldValues.dropdown;
  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const name2 = name.replace(/\s/g, "");
    const name3 = name2.toLowerCase();

    setDetails((prev) => ({
      ...prev,
      [name3]: e.target.value,
    }));

    console.log("details", details);
  };
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dateofbirth: "",
    adharcardnumber: 0,
    panNumber: null,
    occupation: "",
    gender: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (details.adharcardnumber.toString().length !== 16) {
      console.log("Wrong adhar number");
    }
  };

  const handleCheckbox = (e) => {
    if (e.target.name == "male") {
      setMaleChecked(true);
      setFemaleChecked(false);
    } else if (e.target.name == "female") {
      setFemaleChecked(true);
      setMaleChecked(false);
    }
    console.log("Male -> ", maleChecked, "Female -> ", femaleChecked);
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
                          checked={maleChecked}
                        />
                        Male
                      </label>
                      <label htmlFor="">
                        <input
                          type="radio"
                          name="female"
                          onChange={handleCheckbox}
                          checked={femaleChecked}
                        />
                        Female
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
                      name={item.title}
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
                      name={item.title}
                      type={item.inputType}
                      placeholder={item.placeholder}
                      onChange={handelSubmit}
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
