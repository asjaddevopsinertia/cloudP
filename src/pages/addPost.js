import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/header";
import { Snackbar } from "../components/snackbar";
import { addPosts } from "../store/reducers/posts/postSlice";
import { toast } from 'react-toastify';
import { Navigate } from "react-router-dom";

export const AddPosts = () => {
  const [postData, setPostData] = useState({ title: "", body: "" });
  const postStatus = useSelector((state) => state.posts.addPostStatus);
  const dispatch = useDispatch();

  const addPostHandler = (e) => {
    e.preventDefault();
    dispatch(addPosts(postData));
    notify()
  };

  const inputHandler = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const notify = () => toast.success("Post added Successfully");

  if(postStatus === 'success'){
    return <Navigate to="/home" />
  }
  

  return (
    <>
      <Snackbar />
      <Header title="Add Post" login={true} />
      <div className="max-w-[500px] mx-auto px-4 ">
        <form
          onSubmit={addPostHandler}
          className="py-3 pb-8 px-3 rounded-[5px] shadow-[0_3px_8px_rgba(68,36,69,0.5)] sm:px-6 flex flex-col"
        >
          <label htmlFor="html" className="font-bold mb-2 mt-5">
            Title *
          </label>
          <input
            type="text"
            onChange={inputHandler}
            name="title"
            className="border-2 rounded-[5px] border-[#442445] h-[45px] px-2"
            required
            placeholder="Enter the title"
          />

          <label htmlFor="html" className="font-bold mb-2 mt-5">
            Description *
          </label>
          <textarea
            type="text"
            onChange={inputHandler}
            name="body"
            required
            className="border-2 rounded-[5px] border-[#442445] h-[120px] px-2 py-2"
            placeholder="Enter the description"
          />

          <input
            className="bg-[#442445] text-center mt-5 w-full text-[#fff] rounded-[10px] h-[40px] cursor-pointer"
            type="submit"
            value="Save Changes"
          />
        </form>
      </div>
    </>
  );
};
