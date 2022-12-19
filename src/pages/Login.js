import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Header } from "../components/header";
import { formJson } from "../data/formData";
import { login } from "../store/reducers/users/userSlice";
import userPlaceHolder from "../images/user (2).png";

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
  const [image, setImage] = useState(null);

  const handleChanges = (keyName) => (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
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

  if (Object.entries(userState.user).length !== 0) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <Header title="Personal Info" login={false} />
      <div className="max-w-[450px] mx-auto px-4 ">
        <form
          onSubmit={saveUserData}
          className="py-8 px-3 rounded-[5px] shadow-[0_3px_8px_rgba(68,36,69,0.5)] sm:px-6"
        >
          {userData.map((input) => (
            <div key={input.id} className="flex flex-col">
              {input.type === "image" ? (
                <>
                  <div className="file-upload">
                    <img src={image || userPlaceHolder} alt="placeholder"/>
                    <input
                      type="file"
                      id={input.id}
                      onChange={handleChanges(input.key)}
                      value={formState.value}
                      required={input.required}
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </>
              ) : input.type === "radio" ? (
                <>
                  <div
                    className="flex flex-col"
                    onChange={handleChanges(input.key)}
                  >
                    <label htmlFor="html" className="font-bold mb-2 mt-5">
                      {input.label} *
                    </label>
                    <div className="flex items-center">
                      {input.options.map((x) => (
                        <React.Fragment key={x.id}>
                          <input
                            id={input.id}
                            type="radio"
                            name={input.label}
                            value={x.key}
                            required={input.required}
                          />
                          <label htmlFor="html" className="font-bold ml-1 mr-3">
                            {x.label}
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <label htmlFor="html" className="font-bold mb-2 mt-5">
                    {input.label}
                    {input.required ? " *" : null}
                  </label>
                  <input
                    id={input.id}
                    name={input.id}
                    required={input.required}
                    type={input.type}
                    onChange={handleChanges(input.key)}
                    value={formState.value}
                    placeholder={input.placeholder}
                    className="border-2 rounded-[5px] border-[#442445] h-[45px] px-2"
                  />
                </>
              )}
            </div>
          ))}

          <input
            className="bg-[#442445] text-center mt-5 w-full text-[#fff] rounded-[10px] h-[40px] cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};
