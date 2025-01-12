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
    },

    deleteKey: (state, action) => {
      // Create a new object without the key specified in the payload
      const newState = { ...state };
      delete newState[action.payload];
      return newState; // Return the new state without the specified key
    }
  }
});

export const {setPosts, deleteKey} = postSlice.actions;

export default postSlice.reducer;