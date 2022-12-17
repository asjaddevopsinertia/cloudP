import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../store/reducers/posts/postSlice";

export const AddPosts = () => {
  const [postData, setPostData] = useState({ title: "", body: "" });
  const dispatch = useDispatch();

  const addPostHandler = (e) => {
    e.preventDefault();
    dispatch(addPosts(postData));
  };

  const inputHandler = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={addPostHandler}>
        <input
          className="bg-[#222]"
          type="text"
          onChange={inputHandler}
          name="title"
          required
        />
        <input
          className="bg-[#222]"
          type="text"
          onChange={inputHandler}
          name="body"
          required
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </>
  );
}
