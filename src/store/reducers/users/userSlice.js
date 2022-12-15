import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        login:(state,action) => {
            state.user = action.payload
        },
        logout:(state) => {
            state.user = null
        },
    },
})

export default userSlice.reducer;