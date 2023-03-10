import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  posts:[]
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        login:(state,action) => {
            state.user = action.payload
        },
        logout:(state) => {
            state.user = {}
        },
    },
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;