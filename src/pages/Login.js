import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formJson } from "../data/formData";
import { login } from "../store/reducers/users/userSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const newArr = formJson.map((data) => ({ ...data, value: "" }));

  const convertArrayToObject = (array, key, targetKey) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item[targetKey],
      };
    }, initialValue);
  };

  const [formState, setFormState] = useState(
    convertArrayToObject(newArr, "key", "value")
  );

  const handleChanges = (keyName) => (e) => {
    const newValue = e.target.value;
    setFormState((prev) => ({
      ...prev,
      [keyName]: newValue,
    }));
  };

  const saveUserData = (e) => {
    console.log("working")
    e.preventDefault();
    dispatch(login(formState))
  };

  return (
    <>
      <form onSubmit={saveUserData}>
        {newArr.map((input) => (
          <div key={input.id}>
            {input.type === "image" ? (
              <input
                id={input.id}
                type="file"
                onChange={handleChanges(input.key)}
                value={formState.value}
              />
            ) : input.type === "radio" ? (
              <>
                <div onChange={handleChanges(input.key)}>
                  {input.options.map((x) => (
                    <>
                      <label for="html">{x.label}</label>
                      <br></br>
                      <input
                        id={input.id}
                        type="radio"
                        name={input.label}
                        value={x.key}
                      />
                    </>
                  ))}
                </div>
              </>
            ) : (
              <input
                id={input.id}
                name={input.id}
                required={input.required}
                type={input.type}
                onChange={handleChanges(input.key)}
                value={formState.value}
              />
            )}
          </div>
        ))}

        <input type="submit" value="submit" />
      </form>
    </>
  );
};
