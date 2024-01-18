import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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

  return (
    <AppContext.Provider value={{ form, setForm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
