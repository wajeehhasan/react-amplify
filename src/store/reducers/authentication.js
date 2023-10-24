// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  userAuthenticationStatus: false,
  username: ''
};

// ==============================|| SLICE - user ||============================== //

const userauth = createSlice({
  name: 'userauth',
  initialState,
  reducers: {
    userLogIn: (state, action) => {
      state.userAuthenticationStatus = action.payload;
    },
    userLogOut: (state, action) => {
      state.userAuthenticationStatus = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    }
  }
});
export default userauth.reducer;

export const { userLogIn, userLogOut, setUsername } = userauth.actions;
