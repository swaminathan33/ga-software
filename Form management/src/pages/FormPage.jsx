import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../useContext";
import "../App.css";

const FormPage = () => {
  const { form } = useGlobalContext();

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="formpage">
      <h3>Form</h3>
      <form action="">
        {form.map((item, id) => {
          return item.showForm ? (
            <div key={id} className="inside-form">
              <label htmlFor="">{item.title}</label>
              {item.required ? (
                <input
                  type={item.inputType}
                  placeholder={item.title}
                  required
                  onChange={handelSubmit}
                />
              ) : (
                <input type={item.inputType} placeholder={item.title} />
              )}
            </div>
          ) : (
            ""
          );
        })}
        {form.length > 0 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default FormPage;
