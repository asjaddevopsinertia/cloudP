import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const initialState = {
  posts: [],
  addPostStatus: "",
  addPostError: "",
  getPostStatus: "",
  getPostError: "",
};

export const addPosts = createAsyncThunk(
  "posts/addPosts",
  async (post) => {
    try {
      const response = await axios.post(baseURL + "posts", post);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async () => {
    try {
      const response = await axios.get(baseURL + "posts");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [addPosts.pending]: (state, action) => {
      return {
        ...state,
        addPostStatus: "pending",
        addPostError: "",
        getPostStatus: "",
        getPostError: "", 
      };
    },
    [addPosts.fulfilled]: (state, action) => {
      // state.Post.push(action.payload);
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        addPostStatus: "success",
        addPostError: "",
        getPostStatus: "",
        getPostError: "",
      };
    },
    [addPosts.rejected]: (state, action) => {
      return {
        ...state,
        addPoststatus: "rejected",
        addPostError: action.payload,
        getPostStatus: "",
        getPostError: "",
      };
    },
    [getPosts.pending]: (state, action) => {
      return {
        ...state,
        addPostStatus: "",
        addPostError: "",
        getPostStatus: "pending",
        getPostError: "",
      };
    },
    [getPosts.fulfilled]: (state, action) => {
      return {
        ...state,
        posts: action.payload,
        addPostStatus: "",
        addPostError: "",
        getPostStatus: "success",
        getPostError: "",
      };
    },
    [getPosts.rejected]: (state, action) => {
      return {
        ...state,
        addPostStatus: "",
        addPostError: "",
        getPostStatus: "rejected",
        getPostError: action.payload,
      };
    },
  },
});

export default postsSlice.reducer;