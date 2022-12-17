import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { formJson } from "../data/formData";
import { login } from "../store/reducers/users/userSlice";
import Avatar from "react-avatar-edit";

export const Login = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const userData = formJson.map((data) => ({ ...data, value: "" }));

  const arrayToObject = (data, key, value) => {
    const initialValue = {};
    return data.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item[value],
      };
    }, initialValue);
  };

  const [formState, setFormState] = useState(
    arrayToObject(userData, "key", "value")
  );

  const handleChanges = (keyName) => (e) => {
    const newValue = e.target.value;
    setFormState((prev) => ({
      ...prev,
      [keyName]: newValue,
    }));
  };

  const saveUserData = (e) => {
    e.preventDefault();
    dispatch(login(formState));
  };

  const [preview, setPreview] = useState(null);
  function onClose() {
    setPreview(null);
  }
  function onCrop(pv) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 2000000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }

  if (Object.entries(userState.user).length !== 0) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <div className="max-w-[300px] mx-auto px-4 ">
        <div>
          <Avatar
            width={600}
            height={300}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            src={null}
          />
          <br />
          {preview && (
            <>
              <img src={preview} alt="Preview" />
              <a href={preview} download="avatar">
                Download image
              </a>
            </>
          )}
        </div>
        <form onSubmit={saveUserData}>
          {userData.map((input) => (
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
                      <React.Fragment key={x.id}>
                        <label htmlFor="html">{x.label}</label>
                        <input
                          id={input.id}
                          type="radio"
                          name={input.label}
                          value={x.key}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <label htmlFor="html">{input.label}</label>
                  <input
                    id={input.id}
                    name={input.id}
                    required={input.required}
                    type={input.type}
                    onChange={handleChanges(input.key)}
                    value={formState.value}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                </>
              )}
            </div>
          ))}

          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};
