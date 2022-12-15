import React, { useState } from "react";
import { formJson } from "../data/formData";

export const Login = () => {
  const [user, setUserData] = useState(formJson);
  const handleFields = (e) => {
    setUserData({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  console.log("user", user);

  return (
    <>
      <div type="flex" justify="space-around">
        <div span={10}>
          {formJson.map((item) => {
            return (
              <>
                <form label={item.id}>
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={handleFields}
                    name={item.label}
                  />
                </form>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
