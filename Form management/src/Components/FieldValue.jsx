import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../useContext";
const FieldValue = () => {
  const {
    setAddFieldValue,
    fieldValues,
    setFieldValues,
    setFieldValuesDropdown,
    fieldValuesDropdown,
  } = useGlobalContext();
  const dropdown = fieldValues.map((item) => {
    return item.dropdown;
  });
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // dropdown.map((item) => console.log(item));
    // fieldValues.map((item) => console.log(item));
    // setFieldValues((prev) => {
    //   [...prev];
    // });

    // const newField = fieldValues.map((item) => {
    //   item.map((i) => {
    //     return [...i, value];
    //   });
    // });
    // setFieldValues(newField);
    setFieldValuesDropdown((prev) => {
      return [...prev, value];
    });
    console.log(fieldValues);
    setValue("");
  };

  return (
    <div>
      <div className="fieldvalue-overlay">
        <div className="fieldvalue">
          <div className="cancel-button" style={{ textAlign: "right" }}>
            <FaTimes onClick={() => setAddFieldValue(false)} />
          </div>
          <div className="content">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <button type="submit">Add</button>
            </form>
            {fieldValuesDropdown.map((item, index) => {
              return <h5 key={index}>{item}</h5>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldValue;
