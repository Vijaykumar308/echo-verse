import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUserPosts:null
}

export const postSlice = createSlice({
  name:'userPost',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.authUserPosts = action.payload;
    }
  }
});

export const {setPosts} = postSlice.actions;

export default postSlice.reducer;