import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/card";
import { getPosts } from "../store/reducers/posts/postSlice";
import Header from '../components/header'

export default function Home() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  const { posts } = post;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="lg:container xl:max-w-[800px] mx-auto px-4">
        {posts.filter(Boolean).map((post) => {
          return (
            <React.Fragment key={post.id}>
              <Card data={post} />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
