import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../useContext";
import "../App.css";
import axios from "axios";
import FormSubmited from "../Components/FormSubmited";

const FormPage = () => {
  const {
    form,
    fieldValues,
    fieldValuesDropdown,
    setSubmittedUser,
    submittedUser,
  } = useGlobalContext();

  // const dropdown = fieldValues.dropdown;
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dateofbirth: "",
    adharcardnumber: 0,
    pancardnumber: 0,
    occupation: "",
    gender: "",
    vToken: "",
  });

  const convert = (name) => {
    const name2 = name.replace(/\s/g, "");
    const name3 = name2.toLowerCase();
    return name3;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const name3 = convert(e.target.name);
    setDetails((prev) => ({
      ...prev,
      [name3]: e.target.value,
    }));
  };

  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setDetails((prev) => ({
      ...prev,
      ["gender"]: maleChecked ? "male" : "female",
    }));
    // if (details.adharcardnumber.toString().length !== 16) {
    //   console.log("Wrong adhar number");
    // }
    // console.log("Client Side", details);
    setSubmitted(true);
    axios
      .post("http://localhost:3000/add", { details })
      .then((res) => console.log("Data Added to DB", res.data))
      .catch((err) => console.log(err));
    setSubmittedUser(details.email);
    setDetails({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      dateofbirth: "",
      adharcardnumber: 0,
      pancardnumber: 0,
      occupation: "",
      gender: "",
    });
  };

  useEffect(() => {
    console.log(details.email);
  }, [details]);
  const handleCheckbox = (e) => {
    if (e.target.name == "male") {
      setMaleChecked(true);
      setFemaleChecked(false);
    } else if (e.target.name == "female") {
      setFemaleChecked(true);
      setMaleChecked(false);
    }
    // console.log("Male -> ", maleChecked, "Female -> ", femaleChecked);
  };

  useEffect(() => {
    setDetails((prev) => ({
      ...prev,
      ["gender"]: maleChecked ? "male" : "female",
    }));
  }, [maleChecked, femaleChecked]);

  return (
    <div className="formpage">
      {submitted ? <FormSubmited details={details} /> : ""}
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

                {/* checkbox */}

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
                ) : // checkbox end
                // dropdown start
                item.inputType == "dropdown" ? (
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
                ) : /* dropdown end */
                item.required ? (
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

          {form.length > 0 && <button type="submit">Submit</button>}
        </form>
        {/* form */}

        {submitted ? "Form successfully submitted" : ""}
      </div>
    </div>
  );
};

export default FormPage;
