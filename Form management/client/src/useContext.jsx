import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [submittedUser, setSubmittedUser] = useState("");
  const [logout, setLogout] = useState(false);
  const [addFieldValue, setAddFieldValue] = useState(false);
  const [fieldValuesCheckbox, setFieldValuesCheckbox] = useState([]);
  const [fieldValuesDropdown, setFieldValuesDropdown] = useState([
    "Teacher",
    "Doctor",
    "Engineer",
  ]);
  const [vToken, setVToken] = useState(Math.random().toString(36).slice(8));
  const [fieldValues, setFieldValues] = useState([
    {
      dropdown: [],
    },
    {
      checkbox: ["checkbox"],
    },
  ]);
  const [form, setForm] = useState([
    {
      id: 101,
      title: "First Name",
      inputType: "text",
      placeholder: "First Name",
      required: false,
      showForm: true,
    },
    {
      id: 102,
      title: "Last Name",
      inputType: "text",
      placeholder: "Last Name",
      required: false,
      showForm: true,
    },
    {
      id: 202,
      title: "Email",
      inputType: "email",
      placeholder: "Email",
      required: false,
      showForm: true,
    },
    {
      id: 303,
      title: "Password",
      inputType: "password",
      placeholder: "Password",
      required: false,
      showForm: false,
    },
    {
      id: 304,
      title: "Date Of Birth",
      inputType: "date",
      placeholder: "-",
      required: false,
      showForm: false,
    },
    {
      id: 305,
      title: "Adhar Card Number",
      inputType: "number",
      placeholder: "16 numbers",
      required: false,
      showForm: false,
    },
    {
      id: 306,
      title: "Pan Card Number",
      inputType: "number",
      placeholder: "",
      required: false,
      showForm: true,
    },
    {
      id: 307,
      title: "Occupation",
      inputType: "dropdown",
      placeholder: "",
      required: false,
      showForm: true,
      fieldValue: "fieldValue",
    },
    {
      id: 308,
      title: "Gender",
      inputType: "checkbox",
      placeholder: "",
      required: false,
      showForm: true,
      fieldValue: "fieldValue",
    },
  ]);
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("form"));
    setForm(data);
  }, []);

  return (
    <AppContext.Provider
      value={{
        form,
        setForm,
        logout,
        setLogout,
        setAddFieldValue,
        addFieldValue,
        fieldValues,
        setFieldValues,
        fieldValuesDropdown,
        setFieldValuesDropdown,
        vToken,
        submittedUser,
        setSubmittedUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
