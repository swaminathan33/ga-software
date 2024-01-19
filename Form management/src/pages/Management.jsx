import React, { useEffect, useState } from "react";
import FormPage from "./FormPage";
import { useGlobalContext } from "../useContext";
import { Link } from "react-router-dom";

const Management = () => {
  const { form, setForm } = useGlobalContext();

  const [addField, setAddField] = useState(false);
  const [addFieldButton, setAddFieldButton] = useState(true);

  const [title, setTitle] = useState("");
  const [select, setSelect] = useState("number");
  const [placeholder, setPlaceholder] = useState("");
  const [requiredField, setRequiredField] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      inputType: select,
      placeholder: placeholder,
      showForm: showForm,
      requiredField: requiredField,
    };

    setTitle("");
    setSelect("");
    setForm([...form, newForm]);
    setPlaceholder("");
    setAddField(false);
    setAddFieldButton(true);
  };

  const handleDelete = (id) => {
    const newForm = form.filter((item) => item.id != id);
    setForm(newForm);
    console.log(newForm);
  };

  const handleShowForm = (id) => {
    setShowForm(!showForm);
    const newForm = form.map((item) => {
      if (item.id == id) {
        return { ...item, showForm: !item.showForm };
      }
      return item;
    });
    setForm(newForm);
  };

  const handleRequired = (id) => {
    setRequiredField(!requiredField);
    const newForm = form.map((item) => {
      if (item.id == id) {
        return { ...item, required: !item.required };
      }
      return item;
    });
    setForm(newForm);
  };

  const handleAddForm = () => {
    setAddField(true);
    setAddFieldButton(false);
  };

  return (
    <div className="form-manage">
      <h3>Customize Signup Form</h3>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Field Type</th>
            <th>Field Placeholder</th>
            <th>Required Field</th>
            <th>Show in Form</th>
          </tr>
        </thead>
        <tbody>
          {form.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  {item.title}
                  <button onClick={() => handleDelete(item.id)}>x</button>
                </td>
                <td>{item.inputType}</td>
                <td>{item.placeholder}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.required ? true : false}
                    onChange={() => handleRequired(item.id)}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.showForm ? true : false}
                    onChange={() => handleShowForm(item.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* adding elements using this form */}
      {addFieldButton ? (
        <button onClick={handleAddForm}>+ New Field</button>
      ) : (
        ""
      )}
      {addField ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="input-form">
            <div>
              <input
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div>
              <select
                name=""
                id=""
                onChange={(e) => setSelect(e.target.value)}
                value={select}
              >
                <option value="number">Number</option>
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="maximum 80 character"
                maxlength="80"
                onChange={(e) => setPlaceholder(e.target.value)}
                value={placeholder}
              />
            </div>
            <div>
              <button type="submit">submit</button>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default Management;
