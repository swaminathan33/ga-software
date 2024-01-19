import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [logout, setLogout] = useState(false);

  const [form, setForm] = useState([
    {
      id: 101,
      title: "Name",
      inputType: "text",
      placeholder: "place",
      required: false,
      showForm: false,
    },
    {
      id: 202,
      title: "Email",
      inputType: "email",
      placeholder: "place",
      required: false,
      showForm: false,
    },
    {
      id: 303,
      title: "Password",
      inputType: "password",
      placeholder: "place",
      required: false,
      showForm: false,
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
    <AppContext.Provider value={{ form, setForm, logout, setLogout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
