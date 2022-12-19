import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/card";
import { getPosts } from "../store/reducers/posts/postSlice";
import { Header } from '../components/header'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  const { posts, persistPosts } = post;
  
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const goToAddPosts = () => {
    navigate('/add-post');
  }

  const postData = [...persistPosts, ...posts]

  return (
    <>
      <Header title="Home" login={true}/>
      <div className="lg:container xl:max-w-[800px] mx-auto px-4">
        {postData.map((post, index) => {
          return (
            <React.Fragment key={index}>
              <Card data={post} />
            </React.Fragment>
          );
        })}

        <button onClick={goToAddPosts} className="fixed bottom-0 flex justify-center items-center left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] bg-[#442445] px-5 py-2 text-[18px] rounded-[5px]">Add Post</button>
      </div>
    </>
  );
}
